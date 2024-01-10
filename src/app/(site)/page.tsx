import TitleSection from "@/components/landing-page/title-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Banner from "../../../public/appBanner.png";
import Cal from "../../../public/cal.png";
import { CLIENTS, PRICING_CARDS, PRICING_PLANS, USERS } from "@/lib/constanst";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import React from "react";
import { PricingCards } from "@/components/landing-page/pricing-card";

const HomePage = () => {
  return (
    <>
      <section className="overflow-hidden px-4 sm:px-6 mt-10 flex flex-col gap-4 justify-center items-center">
        <TitleSection
          pill="✨ Your Workspace, Perfected"
          title="All -In One Collaboration and Productivity Platform"
        />
        <TryButton />
        <AppBanner />
      </section>
      <section>
        <Clients />
      </section>
      <section className="relative overflow-hidden px-4 sm:px-6 mt-12 flex flex-col gap-4 justify-center items-center">
        <div className="absolute blur-[120px] rounded-full -z-10 bg-brand/brand-primaryPurple/50 top-[30%] left-[25%] bottom-[40%] right-[25%]" />
        <TitleSection
          pill="Features"
          title="Keep track of your meetings all in one place"
          subHeading="Capture your ideas, thoughts, and meeting notes in a structured and organized manner."
        />
        <CalendarBanner />
      </section>
      <section className="relative overflow-hidden px-4 sm:px-6 mt-12 flex flex-col gap-4 justify-center items-center">
        <div className="absolute blur-[120px] rounded-full -z-10 bg-brand/brand-primaryPurple/50 top-[30%] left-[25%] bottom-[40%] right-[25%]" />
        <TitleSection
          pill="Testimonial"
          title="Trusted by all"
          subHeading="Join thousands of satisfied users who rely on our platform for their personal and professionals productivity needs."
        />
        <TestimonialCards />
      </section>
      <section className="px-4 mt-12">
        <TitleSection
          pill="Get Access"
          title="Choose Perfect Plan For You"
          subHeading="Experience all the benefit of our platform starting at just $12.99 per month. Select the plan that suits your needs and take productivity to the new height"
        />
        <PricingCards />
      </section>
    </>
  );
};

const AppBanner = () => (
  <div className="relative w-[800px] top-0 left-[30%] sm:left-0 z-10 sm:w-full flex justify-center items-center">
    <Image src={Banner} alt="Banner" priority />
    <div className="absolute bg-gradient-to-t dark:from-background z-10 top-[50%] bottom-0 left-0 right-0 min-w-[400px] min-h-[200px]" />
  </div>
);

const TryButton = () => (
  <div
    className="inline-flex justify-center items-center bg-gradient-to-r from-brand/brand-primaryBlue to-brand/brand-primaryPurple rounded-[10px] w-full md:w-[300px]
        p-[2px]"
  >
    <Button variant="outline" className="w-full rounded-[8px] p-2">
      Try Convo Free
    </Button>
  </div>
);

const Clients = () => (
  <div
    className="relative overflow-hidden
          flex items-center
        mt-12
        before:content['']
        before:absolute
        before:from-background
        before:top-0
        before:left-0
        before:right-[70%]
        before:bottom-0
        before:bg-gradient-to-r
        before:z-10
        after:content['']
        after:absolute
        after:from-background
        after:top-0
        after:left-[70%]
        after:right-0
        after:bottom-0
        after:bg-gradient-to-l
        after:z-10"
  >
    {[...Array(2)].map((_, index) => {
      return (
        <div
          key={index}
          className=" animate-slide h-20 flex gap-4 flex-nowrap items-center sm:justify-center "
        >
          {CLIENTS.map(({ alt, logo }) => {
            return (
              <div
                key={alt}
                className=" w-[200px] flex justify-items-center items-center m-10 shrink-0"
              >
                <Image
                  src={logo}
                  alt="Company Logo"
                  className=" max-w-none m-auto object-contain"
                />
              </div>
            );
          })}
        </div>
      );
    })}
  </div>
);

const CalendarBanner = () => (
  <div className="relative max-w-[450px] sm:max-w-[750px] p-1 bg-washed-purple/washed-purple-300 sm:left-0 sm:w-full rounded-2xl bg-opacity-10 mt-4">
    <Image
      src={Cal}
      alt="Banner"
      className="rounded-2xl min-w-[200px] min-h-[200px]"
    />
  </div>
);

const TestimonialCards = () => (
  <>
    {[...Array(2)].map((_, i) => {
      return (
        <div
          key={i}
          className={twMerge(
            clsx("flex flex-nowrap gap-6 self-start", {
              "flex-row-reverse": i === 1,
              "ml-[-20vw]": i === 1,
              "animate-[slide_250s_linear_infinite]": true,
              "animate-[slide_250s_linear_infinite_reverse]": i === 1,
            }),
            "hover:paused"
          )}
        >
          {USERS.map(({ name, message }, index) => (
            <Card key={`${index}. ${name}`} className="min-w-[380px]">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={`/avatars/${index + 1}.png`} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <CardTitle>{name}</CardTitle>
                    <CardDescription>@{name.toLowerCase()}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>{message}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      );
    })}
  </>
);

export default HomePage;
