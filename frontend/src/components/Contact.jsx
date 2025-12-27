import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm(
      "service_n4jz9tf",
      "template_5tl8set",
      formRef.current,
      "KgSMI4WpGlfggruVA"
    );

    e.target.reset();
    alert("Message sent successfully!");
  };

  return (
    <footer className="py-28 px-6 text-center">
      <h2 className="text-4xl font-poppins mb-10">
        Let’s <span className="text-accent">Connect</span>
      </h2>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto grid gap-4"
      >
        <input
          name="name"
          placeholder="Your Name"
          required
          className="p-3 rounded-lg bg-white/70 dark:bg-white/5 border border-white/20"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="p-3 rounded-lg bg-white/70 dark:bg-white/5 border border-white/20"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          required
          className="p-3 rounded-lg bg-white/70 dark:bg-white/5 border border-white/20"
        />
        <button className="mt-4 py-3 rounded-lg bg-accent text-white font-medium hover:scale-105 transition">
          Send Message
        </button>
      </form>

      <p className="mt-10 text-sm text-slate-500">
        Open to Full Stack Developer opportunities · Updated Dec 2025
      </p>
    </footer>
  );
}
