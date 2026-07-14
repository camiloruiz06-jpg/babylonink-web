"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "@/data/site";

export default function WhatsappForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState("Tatuaje");
  const [message, setMessage] = useState("");

  // Arma el mensaje y abre WhatsApp
  function handleSubmit(e) {
    e.preventDefault();
    const text =
      `¡Hola Babylon Ink! 👋\n` +
      (name ? `Soy ${name}.\n` : "") +
      `Me interesa: ${service}.\n` +
      (message ? `\n${message}` : "");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-carbon-light bg-carbon p-6 sm:p-8"
    >
      <h3 className="text-2xl text-bone">Escríbenos</h3>
      <p className="mt-2 text-sm text-ash">
        Completa y te llevamos directo a WhatsApp con tu mensaje listo.
      </p>

      {/* Nombre */}
      <label className="mt-6 block text-sm font-medium text-bone">
        Tu nombre
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="¿Cómo te llamas?"
          className="mt-2 w-full rounded-xl border border-carbon-light bg-ink px-4 py-3 text-bone placeholder:text-ash/60 focus:border-blood focus:outline-none"
        />
      </label>

      {/* Servicio */}
      <label className="mt-4 block text-sm font-medium text-bone">
        ¿Qué te interesa?
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="mt-2 w-full rounded-xl border border-carbon-light bg-ink px-4 py-3 text-bone focus:border-blood focus:outline-none"
        >
          <option>Tatuaje</option>
          <option>Piercing</option>
          <option>Smoke shop</option>
          <option>Otra consulta</option>
        </select>
      </label>

      {/* Mensaje */}
      <label className="mt-4 block text-sm font-medium text-bone">
        Tu mensaje
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="Cuéntanos tu idea, zona, tamaño, referencias…"
          className="mt-2 w-full resize-none rounded-xl border border-carbon-light bg-ink px-4 py-3 text-bone placeholder:text-ash/60 focus:border-blood focus:outline-none"
        />
      </label>

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-blood px-6 py-4 font-bold uppercase tracking-wide text-white transition-colors hover:bg-blood-dark"
      >
        <FaWhatsapp size={20} /> Enviar por WhatsApp
      </button>
    </form>
  );
}
