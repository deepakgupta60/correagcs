import type { Metadata } from "next";
import { ServiceDetailPage } from "../../components/service-detail-page";
import { serviceDetails } from "../../components/service-data";

const service = serviceDetails.find(
  (item) => item.slug === "renovation-remodeling",
)!;

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
};

export default function RenovationRemodelingPage() {
  return <ServiceDetailPage service={service} />;
}
