import { getLocationByPath } from "../components/location-data";
import { LocationPage, locationMetadata } from "../components/location-page";

const page = getLocationByPath("/general-contractor-in-frisco");

export const metadata = locationMetadata(page);

export default function FriscoPage() {
  return <LocationPage page={page} />;
}
