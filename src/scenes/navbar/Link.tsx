import { SelectedPage } from "@/share/types";
import AnchorLink from "react-anchor-link-smooth-scroll"


type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage,
}: Props) => {
    const lowercasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage

  return (
    <AnchorLink
        href={`#${lowercasePage}`}
        onClick={() => setSelectedPage(lowercasePage)}
        className={`${selectedPage === lowercasePage ? "text-primary-500" : ""} 
        transition duration-500 ease-in-out hover:text-primary-300
        `}
    >
        {page}
    </AnchorLink>
  )
}

export default Link