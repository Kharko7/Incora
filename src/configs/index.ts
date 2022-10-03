interface Config {
  sideBarRouters: SideBarRouters[];
  footer: Footer;
}

interface SideBarRouters {
  to: string;
  content: string;
}

interface Footer {
  allRightsReserved: string;
  privacyPolicy: string;
  termOfUse: string;
}

export const config: Config = {
  sideBarRouters: [{
    to: "/task1",
    content: 'Task1',

  }, {
    to: "/pagination",
    content: 'Pagination',

  }, {
    to: "/settings",
    content: 'Settings',
  }],
  footer: {
    allRightsReserved: "© 2022 All rights reserved",
    privacyPolicy: "Privacy Policy",
    termOfUse: "Term of Use",
  }
};