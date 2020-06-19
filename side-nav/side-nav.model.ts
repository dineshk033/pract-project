export interface MenuItem {
  name: string;
  navigation?: string;
  children?: MenuItem[];
}

export const MENU_TREE: MenuItem[] = [
  {
    name: 'System Configuration',
    children: [
      { name: 'Global Environment', navigation: 'global' },
      { name: 'CareAreaGroupCode Editor', navigation: 'cagcode' },
      { name: 'INSP Metrology', navigation: 'inspmt' },
      { name: 'LTP Recipe', navigation: 'ltp' },
      { name: 'Monitor Loader Files', navigation: 'monitor-loader' },
    ],
  },
  {
    name: 'Database Management',
    children: [
      { name: 'Global Environment', navigation: 'global' },
      { name: 'CareAreaGroupCode Editor', navigation: 'cagcode' },
      { name: 'INSP Metrology', navigation: 'inspmt' },
      { name: 'LTP Recipe', navigation: 'ltp' },
      { name: 'Monitor Loader Files', navigation: 'monitor-loader' },
    ],
  },
  //   {
  //     name: 'DataBase Management',
  //     children: [
  //       {
  //         name: 'Data Utility',
  //         children: [{ name: 'LTP Recipe', navigation: 'ltp' }],
  //       },
  //     ],
  //   },
];
