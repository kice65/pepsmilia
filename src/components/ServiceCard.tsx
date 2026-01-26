import React from "react";

export default function ServiceCard({ title }: { title: string }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="font-semibold">{title}</h3>
    </div>
  );
}
