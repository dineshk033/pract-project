export interface MenuItem {
  name: string;
  navigation?: string;
  children?: MenuItem[];
}

/** Flat node with expandable and level information */
export interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
  navigation: string;
}
export const MENU_TREE: MenuItem[] = [
  {
    name: 'System Comfiguration',
    children: [
      { name: 'Global Environment', navigation: 'globalEnvironment' },
      {
        name: 'CareAreaGroupCode Editor',
        navigation: 'cag',
      },
      { name: 'INSP Metrology', navigation: 'inspmt' },
      { name: 'Device Technology Editor', navigation: 'tech' },
      { name: 'LTP Recipe', navigation: 'ltp' },
      { name: 'Image Type Editor', navigation: 'imageType' },
      { name: 'Manage Image Location', navigation: 'imageLoc' },
      { name: 'Monitor Loader Files', navigation: 'monitor-loader' },
    ],
  },
  {
    name: 'Database Management',
    children: [
      { name: 'Delete a single lot', navigation: 'lot' },
      { name: 'Delete partition', navigation: 'partition' },
    ],
  },
];
export const TREE_DATA: MenuItem[] = [
  {
    name: 'System Comfiguration',
    children: [
      { name: 'Global Environment', navigation: 'globalEnvironment' },
      {
        name: 'CareAreaGroupCode Editor',
        navigation: 'cag',
      },
      { name: 'INSP Metrology', navigation: 'inspmt' },
      { name: 'Device Technology Editor', navigation: 'tech' },
      { name: 'LTP Recipe', navigation: 'ltp' },
      { name: 'Image Type Editor', navigation: 'imageType' },
      { name: 'Manage Image Location', navigation: 'imageLoc' },
      { name: 'Monitor Loader Files', navigation: 'monitor-loader' },
    ],
  },
  {
    name: 'Database Management',
    children: [
      {
        name: 'Delete Utility',
        children: [
          { name: 'Delete a single lot', navigation: 'lot' },
          { name: 'Delete partition', navigation: 'partition' },
        ],
      },
    ],
  },
];
