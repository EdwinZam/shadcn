import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Badge>Default</Badge>
      <Badge variant={"destructive"}>Destructuve</Badge>
      <Badge variant={"secondary"}>Secondary</Badge>
      <Badge variant={"outline"}>Outline</Badge>
      <Badge variant={"info"}>Info</Badge>
      <Badge variant={"success"}>Success</Badge>
    </div>
  );
}