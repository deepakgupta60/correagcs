import { getLocationByPath } from "../components/location-data";
import { LocationPage, locationMetadata } from "../components/location-page";

const page = getLocationByPath("/general-contractor-in-arlington");

export const metadata = locationMetadata(page);

export default function ArlingtonPage() {
  return <LocationPage page={page} />;
}
