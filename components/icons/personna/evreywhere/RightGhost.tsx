interface ShopProps {
    width?: number | string;
    height?: number | string;
    fill?: string;
    weight?: number | string;
  }
  
  export const RightGhost= ({
    width = 16,
    height = 16,
    fill = "#334155",
    weight = 2,
  }: ShopProps) => {
    return (
     <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9408 6.21823C20.6175 7.3437 21.0658 8.59142 21.2603 9.89017L26.591 45.4933L6.81147 48.4548L1.48075 12.8517C1.2863 11.5529 1.34955 10.2286 1.66691 8.95431C1.98426 7.68002 2.5495 6.48071 3.33035 5.42486C4.11119 4.36901 5.09236 3.47729 6.21783 2.80063C7.34329 2.12397 8.59102 1.67561 9.88976 1.48116C11.1885 1.2867 12.5128 1.34996 13.7871 1.66731C15.0614 1.98467 16.2607 2.5499 17.3166 3.33075C18.3724 4.1116 19.2641 5.09277 19.9408 6.21823Z" fill="#4653DC"/>
  <circle cx="7.5635" cy="12.9524" r="3" transform="rotate(-8.51541 7.5635 12.9524)" fill="white"/>
  <circle cx="15.4756" cy="11.7678" r="3" transform="rotate(-8.51541 15.4756 11.7678)" fill="white"/>
</svg>
        
    );
  };