import config from '../../../config';

// nouvelle orleans
import nouvelleOrleansDesktop from '../../assets/images/photos/desktop/nouvelle-orleans-cover.webp';
import nouvelleOrleansMobile from '../../assets/images/photos/mobile/nouvelle-orleans-cover.webp';

// sur le fil
import surLeFilDesktop from '../../assets/images/photos/desktop/sur-le-fil-cover.webp';
import surLeFilMobile from '../../assets/images/photos/mobile/sur-le-fil-cover.webp';

//echo du phoenix
import echoDuPhoenixDesktop from '../../assets/images/photos/desktop/echo-du-phoenix-cover.webp';
import echoDuPhoenixMobile from '../../assets/images/photos/mobile/echo-du-phoenix-cover.webp';

import echoDesktop from '../../assets/images/photos/desktop/echo.webp';
import echoMobile from '../../assets/images/photos/mobile/echo.webp';

const tracksData = [
  {
    coverMobile: echoMobile,
    coverDesktop: echoDesktop,
  },
  {
    title: 'Echo du phoenix',
    source: `${config.BASE_URL}/public/tracks/echo-du-phoenix.mp3`,
    coverMobile: echoDuPhoenixMobile,
    coverDesktop: echoDuPhoenixDesktop,
    youtubeLink: 'https://www.youtube.com/watch?v=mhlj0ZNLjcI',
  },
  {
    title: 'Sur le fil',
    source: `${config.BASE_URL}/public/tracks/sur-le-fil.mp3`,
    coverMobile: surLeFilMobile,
    coverDesktop: surLeFilDesktop,
    youtubeLink: 'https://www.youtube.com/watch?v=_TBVtWfLBBQ',
  },
  {
    title: 'Nouvelle Orleans',
    coverMobile: nouvelleOrleansMobile,
    coverDesktop: nouvelleOrleansDesktop,
  },
];

export default tracksData;
