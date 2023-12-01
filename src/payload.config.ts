import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { postgresAdapter } from '@payloadcms/db-postgres'
import {mongooseAdapter} from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import AboutContentResponseAttributes from './collections/Content/AboutContentResponse'
import ContentUpdateResponseAttributes from './collections/Content/ContentUpdateResponse'
import HotspotDetailsResponseAttributes from './collections/Hotspot/HotspotDetails'
import HotspotImagesResponseAttributes from './collections/Hotspot/HotspotImageResponse'
import HotspotResponseAttributes from './collections/Hotspot/HotspotResponse'
import ProductARResponseAttributes from './collections/Products/ProductAr'
import ProductCategoryResponseAttributes from './collections/Products/ProductCategory'
import ProductExteriorResponseAttributes from './collections/Products/ProductExterior'
import ProductResponseAttributes from './collections/Products/ProductResponse'
import ProductVariantResponseAttributes from './collections/Products/ProductVariant'
import AboutSectionResponseAttributes from './collections/Section/AboutSectionResponse'
import SectionDetailResponseAttributes from './collections/Section/SectionDetail'
import Media from './collections/Media'
import AddressResponseAttributes from './collections/AddressResponse'
import CampaignResponseAttributes from './collections/CampaignResponse'
import ColourPaletteResponseAttributes from './collections/ColourPalette'
import ContactResponseAttributes from './collections/ContactResponse'
import DealResponseAttributes from './collections/DealResponse'
import EventResponseAttributes from './collections/EventResponse'
import GalleryNewResponseAttributes from './collections/GallaryNewResponse'
import HighlightResponseAttributes from './collections/HighlightResponse'
import TemplateResponseAttributes from './collections/Template'
import QrcodeResponseAttributes from './collections/QrCode'
import OrganizationResponseAttributes from './collections/OrganisationResponse'
import Websiteclient from './collections/websites/WebsiteClients'
import Websitefooter from './collections/websites/WebsiteFooter'
import Websitehome from './collections/websites/WebsiteHome'
import Websitenavbar from './collections/websites/WebsiteNavbar'
import Websitenavbarlogo from './collections/websites/WebsiteNavbarLogo'
import Websiteoffer from './collections/websites/WebsiteOffer'
import WebsiteoffersDigitalMarketing from './collections/websites/WebsiteOfferDigitalMarketing'
import Websiteoffercard from './collections/websites/WebsiteOfferCard'
import WebsiteoffersDigitalMarketingCards from './collections/websites/WebsiteOfferDigitalMarketingCards'
import Websiteteam from './collections/websites/WebsiteTeams'
import Websiteteamcard from './collections/websites/WebsiteTeamCards'
import Upload from './collections/websites/Upload'
import WebsiteAdvisoryBoardTeam from './collections/websites/WebsiteAdvisoryBoardTeam'
import WebsiteFoundingTeam from './collections/websites/WebsiteFoundingTeam'

export default buildConfig({
  serverURL:process.env.PAYLOAD_PUBLIC_EXTERNAL_SERVER_URL,
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  cors:process.env.WHITELIST_ORIGINS?process.env.WHITELIST_ORIGINS.split(','):[],
  csrf:process.env.WHITELIST_ORIGINS?process.env.WHITELIST_ORIGINS.split(','):[],
  collections: [
    Media,
    Users,
    AboutContentResponseAttributes,
    ContentUpdateResponseAttributes,
    HotspotDetailsResponseAttributes,
    HotspotImagesResponseAttributes,
    HotspotResponseAttributes,
    ProductARResponseAttributes,
    ProductCategoryResponseAttributes,
    ProductExteriorResponseAttributes,
    ProductResponseAttributes,
    ProductVariantResponseAttributes,
    AboutSectionResponseAttributes,
    SectionDetailResponseAttributes,
    AddressResponseAttributes,
    CampaignResponseAttributes,
    ColourPaletteResponseAttributes,
    ContactResponseAttributes,
    DealResponseAttributes,
    EventResponseAttributes,
    GalleryNewResponseAttributes,
    HighlightResponseAttributes,
    QrcodeResponseAttributes,
    TemplateResponseAttributes,
    OrganizationResponseAttributes,
    // website isibisi
    Websiteclient,
    Websitefooter,
    Websitehome,
    Websitenavbar,
    Websitenavbarlogo,
    Websiteoffer,
    Websiteoffercard,
    WebsiteoffersDigitalMarketingCards,
    WebsiteoffersDigitalMarketing,
    Websiteteam,
    Websiteteamcard,
    WebsiteAdvisoryBoardTeam,
    WebsiteFoundingTeam,
    Upload
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins:[payloadCloud()],
  db:mongooseAdapter({
    url:process.env.DATABASE_URI
  }),
})
