import Contact from "./Contact";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


describe("Contact form", () => {
  //рендер форми
  it("renders form fields", () => {
    render(<Contact />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send/i })).toBeInTheDocument();
  });
  //Тест валідації
  it("shows validation errors when submitting empty form", async () => {
    render(<Contact />);

    const button = screen.getByRole("button", { name: /send/i });

    await userEvent.click(button);

    expect(await screen.findByText(/Name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Email is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Message is required/i)).toBeInTheDocument();
  });

  //заповнення форми
  it("allows typing into inputs", async () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    await userEvent.type(nameInput, "Anna");
    await userEvent.type(emailInput, "anna@test.com");
    await userEvent.type(messageInput, "This is a valid message text");

    expect(nameInput).toHaveValue("Anna");
    expect(emailInput).toHaveValue("anna@test.com");
    expect(messageInput).toHaveValue("This is a valid message text");
  });

  //невалідне заповнення форми
  it("shows validation errors for invalid input", async () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    await userEvent.type(nameInput, "+");
    await userEvent.type(emailInput, "mail");
    await userEvent.type(messageInput, "text");

    await userEvent.click(screen.getByRole("button", { name: /send/i }));

    expect(
      await screen.findByText(/Minimum 2 characters/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Invalid email format/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Minimum 10 characters/i),
    ).toBeInTheDocument();
  });

  //Тест успішного сабміту
  it("submits the form successfully", async () => {
    render(<Contact />);

    await userEvent.type(screen.getByLabelText(/name/i), "Anna");
    await userEvent.type(screen.getByLabelText(/email/i), "anna@test.com");
    await userEvent.type(
      screen.getByLabelText(/message/i),
      "This is a valid message text",
    );

    await userEvent.click(screen.getByRole("button", { name: /send/i }));

    expect(globalThis.fetch).toHaveBeenCalled();
  });
});


