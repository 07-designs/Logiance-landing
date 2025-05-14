interface GhostProps {
    width?: number | string;
    height?: number | string;
    fill?: string;
    weight?: number | string;
  }
  
  export const Ghost = ({
    width = 16,
    height = 16,
    fill = "#334155",
    weight = 2,
  }: GhostProps) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="25" viewBox="0 0 28 25" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M20.032 6.20985C20.7432 7.31383 21.23 8.54708 21.4645 9.83918L27.8946 45.2603L8.21623 48.8326L1.78614 13.4115C1.55158 12.1194 1.57381 10.7937 1.85158 9.5102C2.12934 8.22669 2.65718 7.01046 3.40498 5.93095C4.15278 4.85144 5.10587 3.92979 6.20986 3.21862C7.31384 2.50745 8.54709 2.02069 9.83919 1.78613C11.1313 1.55157 12.4569 1.57381 13.7404 1.85157C15.024 2.12933 16.2402 2.65718 17.3197 3.40497C18.3992 4.15277 19.3209 5.10587 20.032 6.20985Z" fill="#4653DC"/>
  <circle cx="7.86828" cy="13.3237" r="3" transform="rotate(-10.289 7.86828 13.3237)" fill="white"/>
  <circle cx="15.7396" cy="11.8948" r="3" transform="rotate(-10.289 15.7396 11.8948)" fill="white"/>
</svg>
    );
  };