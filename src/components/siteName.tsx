import siteMetadata from "data/siteMetadata";
import Link from "./Link";

const SiteName = ({
  domain = false,
  url = false,
  email = false,
  supportEmail = false,
  partnershipsEmail = false,
  facebook = false,
  address = false,
}) => {
  if (domain) return <span>{siteMetadata.siteDomain}</span>;
  if (email)
    return (
      <Link href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</Link>
    );
  if (supportEmail)
    return (
      <Link href={`mailto:${siteMetadata.supportEmail}`}>
        {siteMetadata.supportEmail}
      </Link>
    );
  if (partnershipsEmail)
    return (
      <Link href={`mailto:${siteMetadata.partnerShipsEmail}`}>
        {siteMetadata.partnershipsEmail}
      </Link>
    );
  if (url)
    return <Link href={siteMetadata.siteUrl}>{siteMetadata.siteUrl}</Link>;
  if (facebook)
    return <Link href={siteMetadata.facebook}>{siteMetadata.facebook}</Link>;
  if (address) return <span>{siteMetadata.companyAdress}</span>;
  return <span>{siteMetadata.title}</span>;
};

export default SiteName;
