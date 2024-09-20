"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

export default function Page() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [multipleDates, setMultiplesDates] = React.useState<Date[] | undefined>(
    []
  );

  const smallDate = date?.toLocaleDateString("es-ES", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  return (
    <div className="grid grid-cols-4 gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        disabled={(date) => date > new Date()}
      />
      <Calendar
        mode="multiple"
        selected={multipleDates}
        onSelect={setMultiplesDates}
        className="rounded-md border shadow"
      />
      <div>
        <h1 className="text-3xl">Información</h1>
        <div className="border-b">
          <p>{smallDate}</p>
          <p>
            {multipleDates?.map((date) => date.toLocaleDateString()).join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}
