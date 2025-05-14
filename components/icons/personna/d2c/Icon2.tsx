interface Icon2Props {
    width?: number | string;
    height?: number | string;
    fill?: string;
    weight?: number | string;
  }
  
  export const Icon2 = ({
    width = 16,
    height = 16,
    fill = "#334155",
    weight = 2,
  }: Icon2Props) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.2" d="M21 5.25V15.75C21 15.9489 20.921 16.1397 20.7803 16.2803C20.6397 16.421 20.4489 16.5 20.25 16.5H18V8.25C18 8.05109 17.921 7.86032 17.7803 7.71967C17.6397 7.57902 17.4489 7.5 17.25 7.5H6V5.25C6 5.05109 6.07902 4.86032 6.21967 4.71967C6.36032 4.57902 6.55109 4.5 6.75 4.5H20.25C20.4489 4.5 20.6397 4.57902 20.7803 4.71967C20.921 4.86032 21 5.05109 21 5.25Z" fill="url(#paint0_linear_925_486)"/>
        <path d="M20.25 3.75H6.75C6.35218 3.75 5.97064 3.90804 5.68934 4.18934C5.40804 4.47064 5.25 4.85218 5.25 5.25V6.75H3.75C3.35218 6.75 2.97064 6.90804 2.68934 7.18934C2.40804 7.47064 2.25 7.85218 2.25 8.25V18.75C2.25 19.1478 2.40804 19.5294 2.68934 19.8107C2.97064 20.092 3.35218 20.25 3.75 20.25H17.25C17.6478 20.25 18.0294 20.092 18.3107 19.8107C18.592 19.5294 18.75 19.1478 18.75 18.75V17.25H20.25C20.6478 17.25 21.0294 17.092 21.3107 16.8107C21.592 16.5294 21.75 16.1478 21.75 15.75V5.25C21.75 4.85218 21.592 4.47064 21.3107 4.18934C21.0294 3.90804 20.6478 3.75 20.25 3.75ZM3.75 8.25H17.25V9.75H3.75V8.25ZM17.25 18.75H3.75V11.25H17.25V18.75ZM20.25 15.75H18.75V8.25C18.75 7.85218 18.592 7.47064 18.3107 7.18934C18.0294 6.90804 17.6478 6.75 17.25 6.75H6.75V5.25H20.25V15.75Z" fill="url(#paint1_linear_925_486)"/>
        <defs>
        <linearGradient id="paint0_linear_925_486" x1="11.6024" y1="4.5" x2="21.9225" y2="6.41495" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2A35A4"/>
        <stop offset="0.5" stopColor="#3E49B8"/>
        <stop offset="1" stopColor="#407FFF"/>
        </linearGradient>
        <linearGradient id="paint1_linear_925_486" x1="9.53313" y1="3.75" x2="22.9969" y2="6.11199" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2A35A4"/>
        <stop offset="0.5" stopColor="#3E49B8"/>
        <stop offset="1" stopColor="#407FFF"/>
        </linearGradient>
        </defs>
        </svg>
    );
  };