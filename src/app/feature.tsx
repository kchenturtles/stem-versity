"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  HeartIcon,
  KeyIcon,
  PuzzlePieceIcon,
  HomeModernIcon,
  GlobeAsiaAustraliaIcon
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: GlobeAsiaAustraliaIcon,
    title: "Minority Representation",
    link: "/minority",
    children:
      "Despite comprising 30% of the U.S. population, African American, Hispanic, and Native American individuals collectively account for only 13% of the STEM workforce (NSF, 2023).",
  },
  {
    icon: PuzzlePieceIcon,
    title: "Gender Diversity",
    link: "/gender",
    children:
      "Women, particularly those from minority and low-income backgrounds, also face significant underrepresentation, making up only 28% of the STEM workforce (NSF, 2023).",
  },
  {
    icon: KeyIcon,
    title: "Accessibility and Inclusion",
    link: "/accessibility",
    children:
      "Statistics indicate that a substantial number of STEM learning environments and resources are not adequately accessible digitally or physically.",
  },
  {
    icon: HomeModernIcon,
    title: "Supporting Underserved Communities",
    link: "/underserved",
    children:
      "Schools in low-income areas often struggle to afford updated technology, laboratory equipment, and qualified STEM educators, resulting in unequal access to quality STEM education and opportunities for hands-on learning experiences. ",
  },
];

function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Building Diversity
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Concentrations
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
        The numbers don&apos;t lie: minority groups and individuals from low-income backgrounds are significantly underrepresented in STEM careers, despite comprising a significant portion of the population. Through targeted initiatives, such as devoting resources to support STEM education in underserved communities and advocating for diversity in STEM workforce recruitment, retention, and advancement, we can begin to address this problem.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
