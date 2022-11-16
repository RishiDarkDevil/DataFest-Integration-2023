import hackathonLogo from './Assets/hackathonLogo.png';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from './Assets/boy.png';
import pass from './Assets/sponsorsLogos/1pass.png';
import ACF from './Assets/sponsorsLogos/ACF.png';
import cfc from './Assets/sponsorsLogos/cfc.png';
import echoAR from './Assets/sponsorsLogos/echoAR.png';
import egg from './Assets/sponsorsLogos/egg.png';
import glimpse from './Assets/sponsorsLogos/glimpse.png';
import interviewC from './Assets/sponsorsLogos/interview-cake.jpg';
import ll from './Assets/sponsorsLogos/ll.png';
import qoom from './Assets/sponsorsLogos/qoom.svg';
import Replit from './Assets/sponsorsLogos/replit.png';
import sublime from './Assets/sponsorsLogos/sublime.png';
import taskade from './Assets/sponsorsLogos/taskade.png';
import lyin from './Assets/teami/lyin.jpg';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import me from './Assets/teami/me.png';
import moon from './Assets/teami/moon.png';
import Ryah from './Assets/teami/Ryah.jpg';
import zoha from './Assets/teami/zoha.png';

const TOP_SECTION = {
  TITLE: 'Join DataFest',
  Typed_effect: ['1 month of creation', 'Win awesome prizes'],
  SHORT_DESCRIPTION:
    'Join us on TBD January 2023 with over 100 teams from across the nation for 1 month of model building, case study & innovation.',
  IMG_SRC: boy,
  DISCORD_LINK: '',
  JUDGES_FORM_LINK: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  HACKERS_REGISTRATION_FORM_LINK: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
};

const SOCIALS = {
  instagram: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  discord: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  linkedin: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  twitter: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  devpost: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ/',
  email: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  mail: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
};

const MIDDLE_SECTION = {
  TITLE: 'What is DataFest?',
  LONG_DESCRIPTION:
    'DataFest is 1 month long running datathon will be held on January DATES TBD. It calls for data enthusiasts, students, researchers, tech evangelists, creatives, and developers from all disciplines with a passion for data and models to take a part to win awesome prizes and collaborate with other developers . Throughout the event participants of DataFest will have unique opportunities to learn from each other trying hands in new solutions, innovative techniques and out of box thinking. We are determined to have an all-inclusive and diverse group of students attending.',
  LOGO: hackathonLogo
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  JOIN_TEAM: {
    required: true,
    src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  Privacy_policy: {
    required: true,
    src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  Terms_of_use: {
    required: true,
    src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 1,
  year: 2023
};

const schedule = [
  {
    day: '1-1-2023',
    events: [
      {
        title: 'Commencement of DataFest',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '5-1-2023',
    events: [
      {
        title: 'Release of Problem Statement',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      },
      {
        title: 'Release of Dataset',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '3-1-2023',
    events: [
      {
        title: 'AMA Session',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '1-1-2023',
    events: [
      {
        title: 'Lecture Series',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '1-1-2023',
    events: [
      {
        title: 'Submission Deadline',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  }
];

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'overall First',
      content:
        'First Overall prize will be given to a project that outstands all other submissions'
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: 'overall Second',
      content:
        'Second Overall prize will be given to the second best project of the hackathon'
    },
    {
      icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
      type: 'Third Second',
      content:
        'Best third overall project of the hackathon will win some awesome prizes'
    }
  ],
  [
    //Array 2
    {
      icon: <i className="fab fourth fa-3x fa-wpbeginner"></i>,
      type: 'Best Solo',
      content:
        'You project will qualify for this prize if you participate alone without a team though we encourage you to participate with a team'
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: ' Best Beginner',
      content: 'Your project will qualify for this category if atleast 50% '
    },
    {
      icon: <i className="fas fa-user-friends seventh fa-3x "></i>,
      type: 'More prizes',
      content: 'More prizes will be revealed later'
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: 'Rishi',
      role: 'Event Head',
      github: 'https://youtu.be/YUSFU3XV08A',
      linkedin: '',
      img: me
    },
    {
      Name: 'Moon',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: moon
    },
    {
      Name: 'Erika',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: 'Lyanola',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: lyin
    },
    {
      Name: 'Zoheb',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: zoha
    }
  ]
];

const JudgesInfo = [
  [
    //Array 1
    {
      Name: 'Rishi',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: me
    },
    {
      Name: 'Moon',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: moon
    },
    {
      Name: 'Ryah Garcia',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: 'Lyanola',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: lyin
    },
    {
      Name: 'Zoheb',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: zoha
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: cfc}, {src: sublime}, {src: echoAR}], //Array 1
  [{src: taskade}, {src: Replit}, {src: qoom}], //Array 2
  [{src: interviewC}, {src: pass}, {src: glimpse}], //Array 3
  [{src: egg}, {src: ll}, {src: ACF}] //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'What is a datathon?',
        content:
          'A datathon is usually a month long event where data enthusiasts all over the globe will collaborate on creating an innovative solution and model by the end of the event for a data-driven problem.'
      },
      {
        label: 'Who can attend?',
        content:
          'DataFest is open to all practitioners, researchers, graduate, undergraduate, high school students and middle school students from all across the globe, who nurture a passion for data.'
      },
      {
        label: 'I am a first time devil, what should I do?',
        content:
          'No worries, we love to welcome first time devils and start their data journey from a datathon. We have some awesome workshops and events which will help you get started with datathon and model building in general.'
      },
      {
        label: 'How devil army formation works?',
        content:
          "You can form devil army with 4 members in it at maximum. If you don't have a team, there'll be plenty of opportunities for you to meet devils and form a devil army!"
      }
    ],
    [
      {
        label: 'How to register myself in the datathon?',
        content:
          'All you need is to fill our form above and join google group mail (OR DISCORD TBD), we will guide you through everything there'
      },
      {
        label: 'I have more questions?',
        content: 'Reach us directly at (TBD or TBD) we would happy to help you.'
      },
      {
        label: 'Can i volunteer?',
        content:
          'Yes we are actively looking for volunteers, fill the form (in footer section) we will be glad to have you.'
      },
      {
        label: 'Will there be swag?',
        content: 'Yes! Participants will receiveing Devil DataFest swag!.'
      }
    ]
  ]
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  JudgesInfo,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate
};
