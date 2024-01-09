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
import { desc } from "drizzle-orm";
import { cn } from "@/lib/utils";

const HomePage = () => {
  return (
    <>
      <section className="overflow-hidden px-4 sm:px-6 mt-10 flex flex-col gap-4 justify-center items-center">
        <TitleSection
          pill="✨ Your Workspace, Perfected"
          title="All -In One Collaboration and Productivity Platform"
        />
        <div
          className="inline-flex justify-center items-center bg-gradient-to-r from-brand/brand-primaryBlue to-brand/brand-primaryPurple rounded-[10px] w-full md:w-[300px]
        p-[2px]"
        >
          <Button variant="outline" className="w-full h-full rounded-[8px] p-2">
            Try Convo Free
          </Button>
        </div>
        <div className="relative w-[800px] top-[-50px] left-[30%] sm:left-0 z-10 sm:w-full flex justify-center items-center">
          <Image src={Banner} alt="Banner" />
          <div className="absolute bg-gradient-to-t dark:from-background z-10 top-[50%] bottom-0 left-0 right-0 min-w-[400px] min-h-[200px]" />
        </div>
      </section>
      <section>
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
      </section>
      <section className="relative overflow-hidden px-4 sm:px-6 mt-12 flex flex-col gap-4 justify-center items-center">
        <div className="absolute blur-[120px] rounded-full -z-10 bg-brand/brand-primaryPurple/50 top-[30%] left-[25%] bottom-[40%] right-[25%]" />
        <TitleSection
          pill="Features"
          title="Keep track of your meetings all in one place"
          subHeading="Capture your ideas, thoughts, and meeting notes in a structured and organized manner."
        />
        <div className="relative max-w-[450px] sm:max-w-[750px] p-1 bg-washed-purple/washed-purple-300 sm:left-0 sm:w-full rounded-2xl bg-opacity-10 mt-4">
          <Image
            src={Cal}
            alt="Banner"
            className="rounded-2xl min-w-[200px] min-h-[200px]"
          />
        </div>
      </section>
      <section className="relative overflow-hidden px-4 sm:px-6 mt-12 flex flex-col gap-4 justify-center items-center">
        <div className="absolute blur-[120px] rounded-full -z-10 bg-brand/brand-primaryPurple/50 top-[30%] left-[25%] bottom-[40%] right-[25%]" />
        <TitleSection
          pill="Testimonial"
          title="Trusted by all"
          subHeading="Join thousands of satisfied users who rely on our platform for their personal and professionals productivity needs."
        />
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
      </section>
      <section className="px-4 mt-12">
        <TitleSection
          pill="Get Access"
          title="Choose Perfect Plan For You"
          subHeading="Experience all the benefit of our platform starting at just $12.99 per month. Select the plan that suits your needs and take productivity to the new height"
        />
        <div className="relative flex gap-6 max-sm:flex-col justify-center items-center mt-12">
          <div className="absolute blur-[120px] rounded-full -z-10 bg-brand/brand-primaryPurple/50 left-[25%] right-[35%] bottom-[60%] top-[0] sm:left-[30%] sm:bottom-[30%] sm:right-[50%]" />
          {PRICING_CARDS.map(
            ({ planType, description, freatures, price, highlightFeature }) => (
              <Card
                key={planType}
                className="w-[280px] bg-background/40 relative min-h-[450px] rounded-2xl"
              >
                <CardHeader>
                  <CardTitle>
                    <div className="relative flex flex-col gap-6">
                      {PRICING_PLANS.proplan === planType && (
                        <Image
                          src="/icons/diamond.svg"
                          alt="Pro plan icon"
                          width={24}
                          height={24}
                          className=" absolute top-0 right-0"
                        />
                      )}
                      <span>{planType}</span>
                      <span className=" font-[200]">
                        ${price}
                        <small className=" dark:text-washed-purple/washed-purple-800 ml-1">
                          /mo
                        </small>
                      </span>
                    </div>
                  </CardTitle>
                  <CardDescription className="flex flex-col dark:text-washed-purple/washed-purple-800">
                    <span>{highlightFeature}</span>
                    <span>{description}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <Button
                      className="w-full whitespace-nowrap"
                      variant="btn-primary"
                    >
                      {planType === PRICING_PLANS.proplan
                        ? "Go Pro"
                        : "Get Started"}
                    </Button>
                    {freatures.map((feature) => (
                      <div className="flex gap-4">
                        <Image
                          src={"/icons/check.svg"}
                          alt="check"
                          width={24}
                          height={24}
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </section>
    </>
  );
};

export default HomePage;
