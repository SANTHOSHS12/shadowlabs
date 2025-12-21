import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "Who can use Shadow for enterprise?",
      a: "Shadow is built for high-stakes sales, leadership, and customer-facing teams.",
    },
    {
      q: "Does Shadow train on my data?",
      a: "No. Shadow records only with consent and does not train on your private data.",
    },
    {
      q: "Can I try it for free before starting?",
      a: "Yes. The Starter plan is free to use.",
    },
    {
      q: "What languages and apps are supported?",
      a: "Shadow supports English, Hinglish, and more across popular meeting tools.",
    },
    {
      q: "What tools does Shadow work with?",
      a: "Shadow works with Zoom, Google Meet, Microsoft Teams, and more.",
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer hover:shadow-md transition-shadow duration-200"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-gray-900 pr-8">{item.q}</h3>
                <span className="text-primary text-xl font-bold">{open === i ? "−" : "+"}</span>
              </div>

              {open === i && (
                <p className="text-gray-600 mt-4 leading-relaxed animate-fade-in-up">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
