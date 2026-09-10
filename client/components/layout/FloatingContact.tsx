import { Phone } from "lucide-react";
import { factory } from "@/lib/factory-data";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={factory.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor">
          <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.696 4.607 1.898 6.48L4 29l7.72-1.855A11.93 11.93 0 0 0 16.001 27C22.629 27 28 21.627 28 15S22.629 3 16.001 3Zm0 21.75c-1.994 0-3.85-.575-5.417-1.567l-.389-.242-4.583 1.1 1.128-4.463-.254-.406A9.71 9.71 0 0 1 5.25 15c0-5.936 4.815-10.75 10.751-10.75 5.935 0 10.75 4.814 10.75 10.75s-4.815 10.75-10.75 10.75Zm5.893-8.043c-.322-.161-1.905-.94-2.2-1.048-.295-.108-.51-.161-.725.161-.214.322-.83 1.048-1.018 1.263-.188.215-.375.242-.697.081-.322-.161-1.36-.501-2.591-1.598-.958-.854-1.605-1.908-1.793-2.23-.188-.322-.02-.496.141-.656.145-.144.322-.375.483-.563.161-.188.214-.322.322-.537.107-.215.053-.402-.027-.563-.08-.161-.725-1.747-.993-2.393-.262-.628-.528-.543-.725-.553l-.618-.011c-.215 0-.563.081-.858.402-.295.322-1.126 1.1-1.126 2.683 0 1.583 1.153 3.112 1.314 3.327.161.215 2.267 3.462 5.494 4.856.768.332 1.367.53 1.834.678.77.245 1.472.21 2.027.128.618-.092 1.905-.779 2.174-1.53.268-.752.268-1.396.188-1.531-.08-.134-.295-.215-.617-.376Z" />
        </svg>
      </a>
      <a
        href={factory.phoneHref}
        aria-label="Call now"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brick text-primary-foreground shadow-lg shadow-black/20 transition-transform hover:scale-105"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
