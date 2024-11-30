import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

interface Credential {
  title: string;
  organization: string;
  issueDate: string;
  onShowCredentials?: () => void;
}

const credentials: Credential[] = [
  {
    title: "Data Science",
    organization: "Digital Academy",
    issueDate: "Jan 2024",
  },
  {
    title: "Microsoft Power Bi Bootcamp Udemy",
    organization: "Udemy",
    issueDate: "Nov 2023",
  },
  {
    title: " Google Data Analysis",
    organization: "Coursera",
    issueDate: "Aug 2023",
  },
  {
    title: "Genrtative IA",
    organization: " LinkdIn Learning",
    issueDate: "Feb 2023",
  },
];

export default function Certifications() {
  return (
    <div className="w-full max-w-[100vw] overflow-hidden">
      <div className="w-full font-outfit px-4 sm:px-6 md:px-8 mb-6">
        <h2 className="text-2xl md:text-4xl text-black dark:text-white">Licenses & Certifications</h2>
      </div>
      <div className="w-full font-outfit grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-4">
        {credentials.map((credential, index) => (
          <Card key={index} className="border-0 shadow-none">
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-1">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">{credential.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <span>{credential.organization}</span>
                    <span className="hidden sm:inline">·</span>
                    <span>Issued {credential.issueDate}</span>
                  </div>
                </div>
                <Button variant="secondary" className="w-full sm:w-auto gap-2" onClick={credential.onShowCredentials}>
                  Show Credentials
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
