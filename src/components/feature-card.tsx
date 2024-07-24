import { ArrowRightIcon } from "@heroicons/react/24/outline";
import {
    Typography,
    Card,
    CardBody,
  } from "@material-tailwind/react";
import Link from "next/link";
  
  interface FeatureCardProps {
    icon: React.ElementType;
    title: string;
    link: string;
    children: React.ReactNode;
  }
  
  export function FeatureCard({ icon: Icon, title, children, link }: FeatureCardProps) {
    return (
      <Link href={link}>
      <Card color="transparent" shadow={false}>
        <CardBody className="grid justify-start">
          <div className="mb-4 grid h-12 w-12 place-content-center rounded-lg bg-gray-900 p-2.5 text-left text-white">
            <Icon className="h-6 w-6" />
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography className=" font-normal !text-gray-500">
            {children}
          </Typography>
          <ArrowRightIcon className = "rounded-lg text-gray-900 h-12 px-4 py-2 hover:opacity-25 text-right ml-auto"/>
        </CardBody>
      </Card>
      </Link>
    );
  }

  export default FeatureCard;
  