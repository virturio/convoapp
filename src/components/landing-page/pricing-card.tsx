import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { PRICING_CARDS, PRICING_PLANS } from "@/lib/constanst";
import { Button } from "../ui/button";
import { FC } from "react";

interface PricingCardProps {
  pricingCard: {
    planType: string;
    description: string;
    freatures: string[];
    price: string;
    highlightFeature: string;
  };
}

export const PricingCards = () => (
  <div className="relative flex gap-6 max-sm:flex-col justify-center items-center mt-12">
    <div className="absolute blur-[120px] rounded-full -z-10 bg-brand/brand-primaryPurple/50 left-[25%] right-[35%] bottom-[60%] top-[0] sm:left-[30%] sm:bottom-[30%] sm:right-[50%]" />
    {PRICING_CARDS.map((pricingCard) => (
      <PricingCard key={pricingCard.planType} pricingCard={pricingCard} />
    ))}
  </div>
);

export const PricingCard: FC<PricingCardProps> = ({
  pricingCard: { planType, description, freatures, price, highlightFeature },
}) => {
  return (
    <Card
      key={planType}
      className="w-[280px] bg-background/40 relative min-h-[450px] rounded-2xl"
    >
      <CardHeader>
        <CardTitle>
          {PRICING_PLANS.proplan === planType && (
            <Image
              src="/icons/diamond.svg"
              alt="Pro plan icon"
              width={24}
              height={24}
              className=" absolute top-4 right-4"
            />
          )}
          <span className=" block mt-4">{planType}</span>
          <span className=" font-[200] block mt-4">
            ${price}
            <small className=" dark:text-washed-purple/washed-purple-800 ml-1">
              /mo
            </small>
          </span>
        </CardTitle>
        <CardDescription className="flex flex-col dark:text-washed-purple/washed-purple-800">
          <span>{description}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <Button className="w-full whitespace-nowrap" variant="btn-primary">
            {planType === PRICING_PLANS.proplan ? "Go Pro" : "Get Started"}
          </Button>
          <span>{highlightFeature}</span>
          {freatures.map((feature) => (
            <div key={feature} className="flex gap-4">
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
  );
};
