import { getLocationByPath } from "../components/location-data";
import { LocationPage, locationMetadata } from "../components/location-page";

const page = getLocationByPath("/construction-company-in-denton");

export const metadata = locationMetadata(page);

export default function DentonPage() {
  return <LocationPage page={page} />;
}
