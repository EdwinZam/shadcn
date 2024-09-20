'use client';

import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button>Default</Button>
      <Button variant={"destructive"}>Destructuve</Button>
      <Button variant={"ghost"}>Ghost</Button>
      <Button variant={"link"}>Link</Button>
      <Button variant={"outline"}>Outline</Button>
      <Button variant={"secondary"}>Secundary</Button>
      <Button disabled>Disabled</Button>
      <Button onClick={()=>console.log('Hola Mundo')}>Click Me</Button>
      <Button variant={"success"}>Success</Button>
      <Button capitalize={true}>capitalize</Button>

      <Button>
      <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
    </Button>
    </div>
  );
}
