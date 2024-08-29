"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import fetch from "node-fetch";
import axios from 'axios';
interface Message {
  text: string;
  sender: "user" | "bot";
}

const Niddia: React.FC = () => {
  useEffect(() => {
    (window as any).MindStudioSettings = {
      publicToken: "pkd281a1076c773e9bd767063d6d923a5d",
      appId: "52b9bb60-13d4-45f2-93a0-bedc2ec9f07e",
      targetId: "mindstudio-frame",
      debugging: true,
      options: {
        autoFocus: true,
        disableThreads: true,
        minimizeThreadPanel: false,
      },
    };

    const script = document.createElement('script');
    script.src = "https://api.mindstudio.ai/v1/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Forzar el enfoque en el campo de texto del iframe después de que todo se haya cargado
    script.onload = () => {
      setTimeout(() => {
        const iframe = document.getElementById('mindstudio-frame') as HTMLIFrameElement;
        if (iframe && iframe.contentWindow) {
          iframe.contentWindow.onload = () => {
            const inputField = iframe.contentDocument?.querySelector('input[type="text"]');
            if (inputField) {
              (inputField as HTMLInputElement).focus();
            }
          };
        }
      }, 1000);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      id="mindstudio-frame"
      referrerPolicy="origin"
      style={{
        width: '100%',
        height: '85vh',
        border: '5px solid rgba(253,255,72,0.8)',
        borderRadius: '8px',
        outline: 'none',
        backgroundColor: 'rgba(253,255,72,0.8)',
      }}
      title="Niddia"
      frameBorder="0"
    ></iframe>
  );
};


export default Niddia;