import { useState } from 'react';

function Logo() {
  return (
    <div className="flex items-center ">
      <img src="/public/images/infominez.png" alt="Infominez Logo" className="w-44" />
    </div>
  );
}


const ServiceCard = ({
  icon,
  title,
  description,
  buttonText,
}) => {
  return (
    <div
      className={`bg-white rounded-2xl p-6 border flex gap-4 items-center border-gray-200 hover:shadow-lg hover:shadow-gray-400 shadow-md transition-shadow duration-300`}
    >
      <div className="flex items-start">
        <div className="text-blue-500 text-4xl p-5">{icon}</div>
      </div>
      <div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-[#8A929A] mt-2">{description}</p>
        </div>
        <button
          className={`mt-6 px-4 py-2 font-medium text-sm rounded-lg text-black border-green-500 hover:bg-green-500 border `}
        >
          {buttonText}
        </button>
      </div>

    </div>
  );
};

const SvgIcon1 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 110 106"
    className="w-full h-full"
  >
    <path
      fill="#3265CD"
      d="M55.606 37.8h-4.41c-3.952-.011-6.843-2.91-6.843-6.864 0-7.996.033-15.992-.015-23.995C44.32 3.775 46.281.836 49.774.083q.614-.093 1.235-.056C68.27.027 85.53.067 102.793 0c3.399-.013 6.674 2.94 6.641 6.68a1470 1470 0 0 0 0 24.403c.025 3.707-3.029 6.749-6.899 6.732-11.088-.048-22.176-.021-33.263 0a2.2 2.2 0 0 0-1.251.452c-2.924 2.317-5.81 4.69-8.73 7.015-.741.59-1.625.662-2.482.23s-1.21-1.14-1.21-2.065c.009-1.826.007-3.677.007-5.647m4.496.88q.327-.139.626-.332c1.714-1.372 3.438-2.732 5.13-4.137.708-.594 1.436-.913 2.383-.912q17.17.03 34.337 0c1.446 0 2.353-.827 2.353-2.16 0-8.108-.023-16.217.028-24.326a2.3 2.3 0 0 0-.662-1.645 2.3 2.3 0 0 0-1.635-.687q-25.69.03-51.38.012c-1.59 0-2.418.849-2.42 2.434v23.996c0 1.507.876 2.376 2.407 2.381h6.453c1.47 0 2.37.894 2.387 2.353.002.974-.007 1.938-.007 3.022"
    ></path>
    <path
      fill="#3265CD"
      d="M40.235 23.91H4.553v55.751h1.034q26.764 0 53.531.01a1.03 1.03 0 0 1 .78.46c.625 1.286 1.181 2.607 1.784 3.972-.075 0-.331.038-.578.038H2.357C.797 84.14 0 83.267 0 81.55V21.65a2.09 2.09 0 0 1 1.75-2.068q.573-.089 1.151-.086l36.407-.031c.695 0 .981.147.933.91-.06 1.132-.006 2.287-.006 3.537M86.577 44.899h15.887c3.604 0 6.164 2.065 6.904 5.575q.056.329.043.662v26.478c0 2.93-2.451 5.802-5.36 6.19a24 24 0 0 1-3.207.176q-15.143.02-30.284 0c-3.346 0-5.945-1.986-6.724-5.099a8.9 8.9 0 0 1-.213-2.04c-.024-2.371.013-4.744-.025-7.116a1.97 1.97 0 0 0-.435-1.1 873 873 0 0 0-6.749-8.406c-.69-.848-1.092-1.752-.58-2.796.497-.993 1.386-1.306 2.47-1.276 1.49.041 2.979-.015 4.468.021.624.015.882-.134.867-.827-.03-1.347.048-2.694.066-4.043.05-3.669 3.068-6.41 6.572-6.403 5.434.014 10.867.004 16.3.004m-23.98 15.743c.344.445.554.724.774.992 1.37 1.712 2.777 3.4 4.096 5.15.343.485.536 1.061.554 1.655.058 2.73.038 5.461.028 8.189 0 1.967.86 2.85 2.85 2.85h29.447c.799 0 1.6.02 2.398-.014 1.297-.055 2.182-.945 2.182-2.206q0-12.822-.011-25.64c0-1.369-.851-2.206-2.198-2.206l-32.01-.02c-1.723 0-2.648.902-2.648 2.631 0 2.067.012 4.137.012 6.202 0 1.536-.862 2.405-2.385 2.415-.968.013-1.93.002-3.09.002"
    ></path>
    <path
      fill="#EA4335"
      d="M8.69 31.618c1.266-.148 2.586-.413 3.908-.43 2.339-.034 4.679.06 7.017.155.793.047 1.58.167 2.35.357.844.19 1.142.846 1.234 1.655.078.677.098 1.392.35 2.006.221.474.602.856 1.075 1.079 1.961.888 3.987 1.638 5.938 2.545.922.428 1.68.515 2.467-.189q.628-.53 1.306-.993c.678-.496 1.397-.514 2.07-.04a37.1 37.1 0 0 1 9.234 9.327c.459.662.449 1.525-.127 2.06-1.675 1.548-1.829 3.067-.553 5.01.806 1.228 1.261 2.729 1.655 4.167.341 1.221 1.068 1.678 2.206 1.792 2.613.262 2.626.267 3.015 2.876a36 36 0 0 1-.215 11.886c-.046.258-.43.643-.662.648-2.421.048-4.845.03-7.367.03.236-1.196.364-2.34.721-3.407.15-.45.735-.858 1.217-1.071.559-.246 1.236-.212 1.835-.39.42-.11.804-.325 1.118-.624.538-.575.533-3.145-.06-3.674-.436-.386-1.078-.56-1.654-.763-.354-.126-.753-.12-1.127-.194a1.79 1.79 0 0 1-1.471-1.557c-.733-4.577-2.339-8.799-5.066-12.577-.845-1.17-1.146-1.82-.08-3.242q.074-.1.132-.208c.35-.616 1.19-1.197.721-1.938-.6-.9-1.34-1.7-2.19-2.368-.266-.215-1.04-.065-1.43.165-2.337 1.407-2.364 1.835-5.13-.114-3.157-2.226-6.751-3.588-10.555-4.271-2.418-.434-2.335-.45-2.858-3.111-.23-1.159-.591-1.541-1.791-1.548-.58 0-1.158-.021-1.738.01-1.054.057-1.48.474-1.588 1.503-.017.165-.053.33-.066.486-.131 1.644-.917 2.61-2.66 2.658-.369.01-.733.176-1.19.293z"
    ></path>
    <path
      fill="#EA4335"
      d="M33.015 75.54c2.632-7.675 1.597-14.65-4.013-20.535-5.626-5.91-12.59-7.205-20.39-4.91 0-1.145-.027-2.217.022-3.286a.83.83 0 0 1 .497-.571c6.935-1.842 13.39-.713 19.246 3.39 5.247 3.68 8.312 8.823 9.332 15.123.54 3.338.271 6.677-.65 9.947-.166.584-.401.93-1.128.864-.945-.096-1.911-.021-2.916-.021"
    ></path>
    <path
      fill="#3265CD"
      d="M47.44 101.502h16.37c1.435 0 2.358.828 2.403 2.13.04 1.231-.93 2.232-2.27 2.338-.166.014-.332 0-.497 0H31.533a5 5 0 0 1-1.46-.183c-1.096-.341-1.654-1.414-1.424-2.638.165-.899 1.158-1.655 2.173-1.655H47.44zM40.864 95.015h13.097v-5.795999999999999a1.753 1.753 0 0 1 1.633-1.742 1.577 1.577 0 0 1 1.698 1.443c.09 1.286.018 2.58.013 3.87 0 1.394 0 2.786-.033 4.177-.018.828-.496 1.303-1.294 1.412a12 12 0 0 1-1.645.084H39.855c-1.986 0-2.45-.466-2.448-2.412v-6.703c0-1.014.662-1.79 1.584-1.876s1.721.564 1.772 1.627c.081 1.73.038 3.475.052 5.202.005.219.03.434.05.714M76.93 25.567H55.006c-1.446 0-2.37-.874-2.378-2.239s.887-2.247 2.367-2.249h43.853c1.445 0 2.344.89 2.354 2.282.008 1.324-.969 2.224-2.423 2.224H76.935zM76.96 13.127h21.926c1.03 0 1.82.496 2.159 1.34.363.907.166 2.03-.662 2.608a3.1 3.1 0 0 1-1.664.526c-5.24.037-10.48.02-15.722.02H55.115c-2.043 0-3.156-1.78-2.183-3.46.448-.776 1.158-1.026 2.01-1.026h22.01zM86.646 70.375h12.08c1.561 0 2.453.86 2.443 2.35-.008 1.316-.961 2.151-2.469 2.151H74.64c-1.418 0-2.494-1.004-2.468-2.297.027-1.292 1.064-2.187 2.492-2.189h11.99zM86.707 59.153h-12.08c-1.423 0-2.514-.942-2.458-2.206.07-1.54 1.217-2.296 2.483-2.292 8.02.023 16.042.011 24.063.01.905 0 1.693.25 2.151 1.082a2.28 2.28 0 0 1-.063 2.423c-.44.72-1.125.993-1.95.993H86.695zM86.734 62.605h12.314c1.283 0 2.107.828 2.117 2.1.013 1.349-.771 2.24-2.07 2.24q-12.436.025-24.876.01c-1.127 0-2.034-.984-2.052-2.16a2.137 2.137 0 0 1 2.088-2.201h12.48z"
    ></path>
  </svg>
);


const SvgIcon2 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 105 105"
    className="w-full h-full"
  >
    <path
      fill="#3265CD"
      d="M.375 48.22c1.43-5.404 2.7-10.86 4.363-16.191.778-2.495 2.317-4.752 3.604-7.302l2.704 1.701C.06 47.398.608 67.602 16.732 85.215c16.295 17.8 36.531 20.071 58.563 10.68l1.506 2.651c-8.732 4.572-17.872 6.669-27.522 5.935C24.555 102.6 5.604 85.396 1.137 61.007.88 59.612.629 58.216.375 56.82z"
    ></path>
    <path
      fill="#3265CD"
      d="M52.98 105.001q-1.862 0-3.731-.142c-12.201-.929-23.229-5.559-31.89-13.392C8.7 83.633 2.977 73.14.768 61.08q-.264-1.434-.522-2.87L0 56.828v-8.649l.012-.048a584 584 0 0 0 1.22-4.717c.965-3.783 1.965-7.697 3.147-11.493.544-1.74 1.429-3.333 2.368-5.02.42-.757.855-1.539 1.26-2.34l.185-.366 3.342 2.103-.16.306C5.79 37.263 3.34 47.508 4.093 57.053c.791 10.027 5.135 19.418 12.911 27.913 7.864 8.589 16.92 13.777 26.916 15.421 9.525 1.564 20.032-.06 31.227-4.83l.298-.132 1.862 3.275-.342.18C69.205 102.943 61.15 105 52.98 105M.755 56.788l.233 1.285.52 2.867c2.181 11.898 7.839 22.26 16.36 29.968 8.522 7.709 19.405 12.285 31.446 13.2 9.186.7 18.26-1.222 26.977-5.714l-1.15-2.024c-11.212 4.726-21.753 6.325-31.333 4.75C33.64 99.45 24.44 94.182 16.46 85.466c-7.892-8.62-12.3-18.161-13.105-28.36-.757-9.597 1.667-19.874 7.206-30.55l-2.069-1.3c-.355.686-.727 1.353-1.086 2-.92 1.652-1.792 3.213-2.308 4.88-1.176 3.772-2.173 7.677-3.135 11.452-.39 1.533-.795 3.12-1.207 4.676zM57.353.384c4.896 1.294 9.968 2.133 14.658 3.958 29.13 11.344 41.441 47.168 25.623 74.091-.309.527-.668 1.026-1.113 1.703l-2.538-1.485c11.195-21.494 10.398-42.073-6.578-59.784C71.135 1.885 51.201-.13 29.718 9.137c-.448-.807-.915-1.633-1.455-2.595 5.523-3.05 11.302-4.757 17.364-5.624.872-.124 1.728-.354 2.591-.534z"
    ></path>
    <path
      fill="#3265CD"
      d="m96.638 80.634-3.152-1.845.164-.315c5.69-10.93 8.125-21.395 7.232-31.106-.936-10.2-5.562-19.703-13.75-28.247C79.276 10.925 70.3 6.014 60.455 4.523c-9.39-1.421-19.681.246-30.592 4.952l-.31.133-1.803-3.215.329-.182c5.2-2.873 10.923-4.727 17.492-5.672.58-.084 1.172-.218 1.742-.35q.412-.093.826-.182L48.176 0h9.226l.046.012c1.542.407 3.135.778 4.668 1.134 3.342.777 6.799 1.58 10.03 2.836C86.09 9.414 96.97 20.84 101.997 35.328c5.049 14.543 3.574 30.32-4.043 43.288-.212.36-.44.7-.705 1.092-.131.194-.27.4-.42.627zm-2.163-2.13 1.929 1.128.228-.34c.258-.382.48-.712.68-1.053 7.508-12.774 8.957-28.323 3.983-42.66-4.957-14.282-15.68-25.54-29.42-30.898-3.18-1.239-6.611-2.036-9.928-2.806-1.525-.355-3.105-.723-4.642-1.127h-9.051q-.388.083-.775.171a23 23 0 0 1-1.802.36c-6.34.906-11.875 2.674-16.907 5.4l1.106 1.974c10.926-4.662 21.25-6.3 30.689-4.872 10.013 1.515 19.133 6.5 27.105 14.82 8.308 8.666 13.003 18.32 13.955 28.696.897 9.766-1.509 20.262-7.15 31.207"
    ></path>
    <path
      fill="#3265CD"
      d="M84.045 37.78c-.53 17.591-6.94 33.03-20.724 45.019-2.756 2.397-5.884 4.366-8.807 6.581-1.446 1.097-2.687.861-4.144-.078-17.183-11.065-27.229-26.505-29.033-47.05-.165-1.87-.629-3.75-.51-5.597.063-.983.862-2.287 1.713-2.77 1.846-1.045 3.914-1.746 5.938-2.447 8.338-2.889 15.708-7.302 21.867-13.665 1.169-1.207 2.396-2.021 3.851-.429 7.504 8.21 17.33 12.452 27.49 16.109 1.932.695 3.226 1.591 2.359 4.327m-31.68-17.52c-6.671 7.424-15.039 11.546-23.944 14.824-4.263 1.57-4.18 1.677-3.836 6.11 1.446 18.393 9.875 32.753 24.802 43.49 2.334 1.68 3.969 1.654 6.293-.02C70.607 73.919 79.003 59.54 80.458 41.156c.348-4.393.399-4.42-3.872-6.105-6.666-2.628-13.358-5.2-18.855-10.02-1.684-1.469-3.34-2.96-5.372-4.77zM12.199 15.57c.094-7.665-1.045-6.662 6.717-6.662 7.717 0 6.7-1.016 6.717 6.656.009 7.433 1.01 6.762-6.702 6.76-7.752 0-6.656.675-6.732-6.754m3.636-3.254v6.34h6.296v-6.34z"
    ></path>
    <path
      fill="#3265CD"
      d="M21.899 22.71q-.555 0-1.22-.007c-.53 0-1.115-.01-1.76-.01s-1.239 0-1.77.01c-2.74.022-3.988.032-4.697-.678-.67-.672-.657-1.8-.633-4.045 0-.697.016-1.493 0-2.41v-.008c.012-.982 0-1.81 0-2.538-.023-2.197-.033-3.3.606-3.933.638-.633 1.801-.622 4.101-.582.689.012 1.47.025 2.38.025.913 0 1.697-.013 2.388-.027 2.308-.04 3.466-.06 4.12.598s.633 1.803.597 4.098c-.01.686-.024 1.463-.023 2.366 0 .86.015 1.61.029 2.27.045 2.328.067 3.496-.615 4.18-.593.602-1.575.691-3.503.691m-2.986-.763h.014c.648 0 1.234 0 1.765.01 2.389.02 3.7.03 4.193-.466.46-.466.438-1.596.399-3.647a119 119 0 0 1-.028-2.284c0-.909.012-1.69.022-2.378.034-2.02.054-3.134-.375-3.56-.428-.425-1.547-.407-3.582-.371a120 120 0 0 1-2.403.027c-.917 0-1.702-.014-2.389-.026-2.024-.036-3.134-.055-3.562.366-.429.42-.405 1.472-.386 3.396 0 .734.015 1.564 0 2.552.01.929 0 1.721 0 2.421-.02 1.974-.032 3.06.415 3.511.489.488 1.791.478 4.163.458.514-.004 1.099-.009 1.747-.009zm3.6-2.92H15.47v-7.088h7.042zm-6.297-.747h5.55v-5.595h-5.55zM86.037 96.145c-7.69-.081-6.611.946-6.628-6.756-.015-7.428-.997-6.672 6.766-6.678 7.556 0 6.664-.689 6.638 6.546-.027 7.895 1.082 6.796-6.776 6.887m3.327-9.828H82.85v6.354h6.512z"
    ></path>
    <path
      fill="#3265CD"
      d="M89.528 96.53h-.982c-.723 0-1.54-.012-2.504 0h-.007c-.91-.01-1.688 0-2.376 0-2.281.018-3.426.025-4.07-.624-.643-.65-.619-1.773-.577-4.017.013-.718.028-1.531.025-2.49 0-.841-.015-1.576-.028-2.224-.045-2.32-.067-3.483.609-4.166.7-.709 1.925-.697 4.61-.671.579 0 1.228.012 1.949.01.658 0 1.25 0 1.791-.01 2.699-.026 3.929-.038 4.635.674.68.686.66 1.86.616 4.2-.012.598-.024 1.286-.027 2.058 0 .983.01 1.816.024 2.55.039 2.286.058 3.434-.59 4.084-.55.547-1.453.626-3.098.626m-2.41-.76c.522 0 .995 0 1.434.008 2.009.016 3.115.025 3.54-.404.426-.428.408-1.537.373-3.546-.013-.739-.026-1.576-.023-2.567 0-.777.014-1.463.026-2.068.038-2.063.058-3.2-.4-3.661-.483-.49-1.767-.478-4.097-.448-.537 0-1.133.01-1.791.01-.726 0-1.375 0-1.957-.01-2.317-.022-3.593-.034-4.072.448-.448.457-.431 1.582-.393 3.626.014.65.027 1.39.029 2.239 0 .965-.012 1.79-.026 2.504-.035 1.97-.056 3.056.362 3.478.417.422 1.526.42 3.534.403.69 0 1.47-.01 2.388 0a51 51 0 0 1 1.074-.012m2.62-2.721H82.48v-7.1h7.26zm-6.512-.746h5.766v-5.608h-5.766z"
    ></path>
    <path
      fill="#FFAD0F"
      d="M52.423 69.264c-3.759 0-7.519.045-11.277-.01-3.472-.053-5.374-1.863-5.34-5.3.016-1.922.486-3.839.711-5.761.055-.475-.078-.967-.082-1.452-.022-2.786-.03-5.571-.05-8.36q0-.966-.056-1.94c-.127-2.38-.63-4.814-.298-7.123.317-2.176 2.137-3.508 4.477-3.521 7.965-.045 15.932-.072 23.896 0 2.837.027 4.77 1.923 4.777 4.735.009 2.09-.472 4.193-.697 6.294-.05.477.08.969.085 1.454.022 2.784.028 5.57.048 8.36 0 .645.022 1.293.056 1.94.13 2.379.66 4.82.3 7.12-.362 2.298-2.288 3.543-4.745 3.552-3.928.021-7.867.01-11.805.012m.015-23.472c3.67 0 7.34-.035 11.011.012 2.79.036 2.463-1.885 2.526-3.705.064-1.912-.402-3.063-2.65-3.04-7.165.071-14.33.086-21.484-.008-2.388-.033-2.801 1.145-2.807 3.17 0 2.128.16 3.714 2.931 3.608 3.487-.133 6.981-.031 10.473-.037m.318 3.421c-3.76 0-7.52.06-11.279-.02-2.44-.054-2.433 1.492-2.413 3.214.019 1.753-.196 3.474 2.46 3.45q11.01-.105 22.02 0c2.673.02 2.379-1.766 2.422-3.49.043-1.769-.069-3.231-2.47-3.172-3.578.084-7.16.018-10.74.018m-.373 16.746c3.67 0 7.342-.064 11.01.023 2.553.06 2.562-1.538 2.586-3.38.023-1.883-.098-3.391-2.598-3.372q-10.876.082-21.751 0c-2.774-.022-2.538 1.792-2.577 3.651-.039 1.86.291 3.154 2.588 3.1 3.578-.086 7.16-.022 10.742-.022"
    ></path>
    <path
      fill="#3265CD"
      d="M64.169 40.92v2.997H50.992l-.138-2.997zM40.701 43.828c.057-1.115.102-1.976.15-2.973l2.976-.138v3.111zM51.048 51.008h13.119v2.945h-13.12zM40.85 54.024v-3.005h3.063v3.005zM50.993 64.136v-2.954h13.125v2.954zM43.956 61.15v2.986h-3.05V61.15z"
    ></path>
  </svg>
);

const SvgIcon3 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 117 116"
    className="w-full h-full"
  >
    <path
      fill="#3265CD"
      d="M0 74.56c1.261-.688 2.537-1.36 3.784-2.077q7.767-4.465 15.518-8.952c.36-.209.726-.405 1.163-.65l1.704 2.932c-.836.49-1.617.955-2.402 1.41a6173 6173 0 0 1-15.522 8.93c-.602.343-.836.714-.834 1.421q.045 10.736 0 21.473a1.335 1.335 0 0 0 .781 1.339q9.36 5.358 18.677 10.781c.58.337.983.291 1.534-.029a3566 3566 0 0 1 18.087-10.447c.357-.206.726-.396 1.209-.66l1.703 2.936-5.202 3.015c-5.238 3.024-10.483 6.035-15.703 9.087-.648.377-1.101.373-1.749 0a4139 4139 0 0 0-21.24-12.274c-.491-.284-.997-.543-1.499-.813zM58.725.989c3.075 1.81 6.143 3.636 9.229 5.428q6.66 3.867 13.347 7.69c.596.337.87.687.868 1.418-.027 7.12-.016 14.24-.02 21.36 0 .334-.044.669-.07 1.03h-3.362v-1.4c0-6.246-.016-12.49.02-18.735 0-.875-.256-1.351-1.028-1.79A1870 1870 0 0 1 59.524 5.491c-.728-.426-1.243-.407-1.955 0A2410 2410 0 0 1 39.182 16.1a1.42 1.42 0 0 0-.824 1.429c.03 6.358.019 12.718.019 19.078v1.298h-3.368c-.02-.364-.06-.73-.06-1.094 0-7.045 0-14.09-.02-21.134 0-.779.228-1.21.915-1.603Q46.543 7.952 57.198 1.76q.557-.359 1.072-.776z"
    ></path>
    <path
      fill="#34A853"
      d="M42.394 94.917h-7.052v-3.38h7.084c.609-1.71 1.495-3.205 3.106-3.88 3.206-1.335 6.562-1.426 9.728 0 1.134.508 2.06 1.783 2.732 2.91.469.778.874 1.02 1.76.856.08-.165.204-.39.302-.623 1.021-2.379 2.83-3.76 5.392-3.99a26 26 0 0 1 4.675-.019c2.507.23 4.332 1.553 5.341 3.892.245.57.53.788 1.175.772 2.049-.05 4.098-.018 6.223-.018v3.434c-1.713 0-3.448.06-5.177-.02-1.225-.056-1.987.144-2.605 1.455-.966 2.06-2.85 3.112-5.165 3.206-1.291.055-2.587.04-3.892.025-2.8-.035-4.726-1.4-5.953-3.892-.158-.32-.618-.72-.904-.687a1.48 1.48 0 0 0-1.01.728c-1.13 2.312-2.903 3.693-5.495 3.867a35 35 0 0 1-4.221.039c-2.716-.151-4.641-1.51-5.738-4.016-.08-.201-.185-.412-.306-.66m29.453-3.526c-1.504-1.809-6.822-1.758-8.05.027l1.782.09v3.326l-1.832.121c1.543 1.713 7.054 1.63 7.94-.036l-1.706-.105v-3.309zm-23.71.1v3.46H46.45c1.31 1.832 6.935 1.77 7.986-.073H52.66v-3.352l1.89-.11c-1.68-1.758-7.019-1.664-8.072.076zM94.64 75.082l-2.975 1.696c-1.047-1.831-2.088-3.592-3.06-5.389-.338-.625-.702-.8-1.423-.737-2.748.229-4.877-.882-6.292-3.276a75 75 0 0 1-1.696-2.977c-1.307-2.445-1.145-4.808.421-7.097.206-.302.355-.898.195-1.131a1.5 1.5 0 0 0-1.145-.54c-2.924.176-5.085-.98-6.513-3.528-.41-.73-.84-1.447-1.255-2.173-1.765-3.107-1.603-5.403.632-8.327-1.131-1.99-2.29-4.022-3.508-6.168l2.95-1.712c1.032 1.795 2.06 3.514 3.014 5.28.358.666.74.88 1.511.812 2.727-.25 4.808.877 6.207 3.205a86 86 0 0 1 1.699 2.977c1.36 2.484 1.165 4.87-.433 7.193-.201.293-.3.866-.144 1.145a1.31 1.31 0 0 0 1.05.51c2.934-.25 5.093.916 6.558 3.435.593 1.016 1.204 2.028 1.73 3.081 1.157 2.31 1.017 4.58-.498 6.672-.509.7-.433 1.144-.044 1.794 1.007 1.688 1.969 3.416 3.02 5.255M73.497 45.09c-.941 1.96 1.817 6.75 3.97 6.953l-.811-1.589 2.894-1.66c.213.335.352.559.497.777.144.217.33.476.522.755.799-2.17-2.024-6.978-4.025-6.916l.847 1.568-2.924 1.669zm9.585 16.626c-.208-.332-.343-.556-.487-.776s-.328-.48-.518-.76c-.847 2.06 1.942 6.822 4.005 6.912-.27-.513-.532-1.015-.822-1.569l2.9-1.666 1.063 1.63c.611-2.482-2.06-7.008-4.037-7.013l.795 1.578c-.966.544-1.882 1.069-2.899 1.664M25.426 76.755l-2.977-1.675c.964-1.686 1.852-3.348 2.848-4.943.54-.864.61-1.452-.048-2.381-1.373-1.942-1.447-4.133-.382-6.276a38 38 0 0 1 2.147-3.761c1.392-2.123 3.416-3.055 5.953-2.874.52.037.984.195 1.358-.457.373-.653-.012-.964-.303-1.395-1.472-2.177-1.627-4.457-.43-6.793.556-1.08 1.179-2.129 1.804-3.17 1.404-2.34 3.478-3.467 6.2-3.222.767.069 1.158-.13 1.516-.801.931-1.738 1.945-3.434 3.005-5.284l2.977 1.683c-1.06 1.852-2.06 3.635-3.1 5.391-.332.559-.346.93.073 1.5 1.603 2.196 1.733 4.563.488 6.976a54 54 0 0 1-1.756 3.068c-1.404 2.337-3.471 3.404-6.2 3.29-.48.002-.944.17-1.314.476-.582.501-.014.916.272 1.346 1.44 2.136 1.633 4.38.458 6.688-.545 1.085-1.172 2.131-1.79 3.177-1.436 2.427-3.574 3.581-6.383 3.318-.698-.064-1.014.128-1.33.703-.978 1.8-2.02 3.56-3.087 5.416m8.56-15.046L31.1 60.024l.831-1.625c-2.154.26-4.83 4.901-3.993 6.96l.98-1.51 2.894 1.654-.836 1.708c2.34-.614 4.843-5.062 4.018-7.056zm5.607-9.616c2.218-.309 4.98-5.119 3.972-6.92l-.96 1.488-2.882-1.667.836-1.701c-2.29.458-4.895 5.124-3.963 6.969l.945-1.46 2.894 1.675z"
    ></path>
    <path
      fill="#3265CD"
      d="M71.982 103.266c.568-.98 1.113-1.926 1.69-2.924l12.615 7.276c2.108 1.216 4.23 2.411 6.319 3.663.56.334.984.353 1.559.018a3193 3193 0 0 1 18.668-10.794c.584-.335.742-.722.742-1.356q-.034-10.735 0-21.472c0-.717-.261-1.072-.856-1.41a2989 2989 0 0 1-16.713-9.63c-.328-.188-.648-.387-1.074-.641l1.68-2.93 1.347.752c6.03 3.476 12.051 6.965 18.098 10.415.675.387.945.795.943 1.603q-.047 12.567 0 25.129c0 .762-.186 1.218-.891 1.623-7.294 4.176-14.563 8.398-21.841 12.603-.486.282-.88.529-1.536.145-6.724-3.94-13.487-7.833-20.25-11.725-.152-.091-.298-.208-.5-.345M25.34 108.232h-3.374c-.02-.426-.053-.827-.053-1.23 0-5.52-.03-11.04.023-16.56 0-.901-.311-1.336-1.053-1.76-4.794-2.725-9.56-5.495-14.334-8.254-.355-.206-.7-.432-1.09-.675l1.697-2.935c5.224 3.013 10.37 5.953 15.488 8.959.716.419 1.23.423 1.948 0 4.79-2.81 9.616-5.568 14.424-8.34.325-.189.657-.367 1.06-.594.574.987 1.12 1.923 1.71 2.933-1.085.636-2.093 1.236-3.107 1.832-4.121 2.376-8.224 4.766-12.363 7.097-.717.405-1 .83-.994 1.676.044 5.52.023 11.037.023 16.557zM75.02 16.816l1.673 2.889c-.392.247-.726.474-1.076.687-4.84 2.8-9.675 5.607-14.534 8.375-.613.35-.824.73-.821 1.428.027 5.559.016 11.118.016 16.676v1.32h-3.364c-.018-.42-.055-.857-.055-1.294 0-5.523-.018-11.042.017-16.565 0-.785-.23-1.224-.916-1.616-4.792-2.729-9.561-5.495-14.335-8.263-.389-.229-.769-.457-1.218-.725l1.704-2.945c4.863 2.805 9.684 5.481 14.382 8.355 1.543.943 2.633.934 4.165 0 4.407-2.704 8.929-5.216 13.414-7.798.27-.183.572-.328.947-.524"
    ></path>
    <path
      fill="#3265CD"
      d="M95.085 108.33h-3.434v-1.287c0-5.407-.03-10.815.019-16.22 0-1.028-.273-1.615-1.203-2.139-5.068-2.852-10.09-5.788-15.256-8.77l1.687-2.952c.421.23.783.42 1.145.623 4.807 2.775 9.615 5.538 14.423 8.343.669.389 1.166.405 1.832 0 4.757-2.789 9.54-5.536 14.313-8.297.36-.209.726-.408 1.212-.687l1.71 2.898c-.362.23-.664.438-.98.62-4.808 2.782-9.604 5.582-14.437 8.316-.818.458-1.06.98-1.054 1.88.042 5.444.023 10.888.026 16.333zM66.3 47.073c.581 1 1.124 1.937 1.715 2.958-3.082 1.781-6.07 3.517-9.074 5.22a1 1 0 0 1-.83-.03c-3.007-1.705-5.994-3.434-9.042-5.197l1.71-2.976c2.4 1.374 4.712 2.688 6.995 4.05.563.337.973.343 1.54 0 2.281-1.346 4.593-2.649 6.986-4.025M36.309 72.32c.577-1.004 1.103-1.915 1.703-2.957.984.565 1.925 1.099 2.864 1.64 1.873 1.078 3.76 2.14 5.607 3.264.332.2.714.65.721.993.053 2.924.023 5.85.011 8.776a1.4 1.4 0 0 1-.128.369h-3.28c0-2.246-.04-4.437.02-6.626.023-.829-.229-1.289-.973-1.692-2.17-1.179-4.283-2.452-6.545-3.766"
    ></path>
    <path
      fill="#3265CD"
      d="m79.197 69.522 1.625 2.853c-2.289 1.323-4.473 2.628-6.7 3.853-.736.403-.99.88-.965 1.706.062 2.005.021 4.013.021 6.083h-3.434c0-1.946.194-3.86-.046-5.724-.341-2.621.556-4.183 3-5.245 2.144-.936 4.102-2.305 6.146-3.48q.174-.045.353-.046M19.947 102.859c-.627 1.067-1.16 1.978-1.73 2.953-4.085-2.351-8.096-4.654-12.096-6.98a.88.88 0 0 1-.384-.607c-.04-1.016-.019-2.033-.019-3.109h3.435c-.458 1.633.826 1.996 1.854 2.585 2.947 1.694 5.896 3.395 8.94 5.158M57.623 11.966l-1.662-2.864c.767-.458 1.49-.916 2.253-1.294a1.01 1.01 0 0 1 .815.066q5.245 3 10.46 6.04c.099.057.186.133.328.229l-1.662 2.919c-.916-.524-1.811-1.019-2.688-1.523-1.978-1.133-3.936-2.289-5.937-3.395-.513-.28-1.144-.332-1.735-.488zM108.025 95.795h3.245c0 .866.027 1.722-.019 2.574a.89.89 0 0 1-.4.6c-3.599 2.099-7.208 4.175-10.885 6.298-.59-1.026-1.144-1.967-1.71-2.963 2.956-1.71 5.854-3.365 8.719-5.073.444-.266.741-.776 1.105-1.172zM51.005 11.962l2.964-1.72 1.715 2.954-2.953 1.72zM46.057 14.834l2.96-1.715 1.722 2.944-2.95 1.735zM9.064 87h-3.27v-3.33h3.27zM107.865 87.658v-3.226h3.308v3.226zM5.81 89.363h3.255v3.327H5.814zM111.208 93.444h-3.274v-3.318h3.274z"
    ></path>
  </svg>
);


const QuotesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="57"
    height="47"
    fill="none"
    viewBox="0 0 57 47"
  >
    <path
      fill="#000"
      d="m49.128 0 2.836 4.207c-8.331 5.243-15.676 11.36-14.182 22.439 1.418-1.169 4.964-3.506 7.8-3.506 3.546 0 12.055 2.103 11.346 13.322-.567 8.976-8.746 10.752-12.764 10.518-4.018 0-12.338-3.646-13.473-18.23C29.557 14.163 42.51 3.505 49.128 0M18.507 0l2.836 4.207C13.011 9.45 5.667 15.567 7.161 26.646c1.418-1.169 4.964-3.506 7.8-3.506 3.546 0 12.055 2.103 11.346 13.322-.568 8.976-8.746 10.752-12.764 10.518-4.018 0-12.339-3.646-13.473-18.23C-1.065 14.163 11.888 3.505 18.507 0"
    ></path>
  </svg>
);


function CloudIcon() {
  return (
    <img src={"/images/cloud.png"} alt="Cloud Icon" className="w-full h-full" />
  );
}


const navbarLink = "text-white decoration-[#00D47E] decoration-[3px] hover:underline hover:underline-offset-4 transition-all duration-300";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const topRowClients = [
    {
      name: "Indore Cancer Foundation",
      img: 'cancer_care.png',
      className: "md:h-[100px] h-[50px]"
    },
    {
      name: "National Institute of Information and Communications Technology",
      img: 'nict.png',
      className: "md:h-[100px] h-[50px]"
    },
    {
      name: "Mayaa Money",
      img: 'mayaa.png',
      className: "md:h-[100px] h-[50px]"
    },
    {
      name: "Paul Merchants Limited",
      img: 'paul.png',
      className: "md:h-[100px] h-[50px]"
    },
    {
      name: "PaidPromo",
      img: 'paid_promo.png',
      className: "md:h-[100px] h-[50px]"
    }
  ];
  const bottomRowClients = [
    {
      name: "EPS",
      img: 'eps.png',
      className: "md:h-[100px] h-[50px]"
    },
    {
      name: "Kriti",
      img: 'kriti.png',
      className: "md:h-[100px] h-[50px]"
    },
    {
      name: "Kasta Pipes",
      img: 'kasta.png',
      className: "md:h-[100px] h-[50px]"
    },
    {
      name: "And Buy",
      img: 'and_buy.png',
      className: "md:h-[100px] h-[50px]"
    },
    {
      name: "Client Logo",
      img: 'cancer_care.png',
      className: "md:h-[100px] h-[50px]"
    }
  ];
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="py-4 absolute left-0 right-0 top-0 z-50">
  <div className="container mx-auto px-4 pt-6 w-full max-w-[1200px]">
    <div className="flex items-center justify-between w-full">

      {/* Logo Section */}
      <div className="flex items-center flex-shrink-0">
        <a href="/" className="text-white text-2xl font-bold flex items-center space-x-2">
          <Logo />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
        </svg>
      </button>

      {/* Desktop Navigation (Centered) */}
      <div className="hidden md:flex flex-1 justify-center items-center space-x-6">
        <a href="#" className={navbarLink}>Home</a>
        <a href="#" className={navbarLink}>Services</a>
        <a href="#" className={navbarLink}>Industries</a>
        <a href="#" className={navbarLink}>Resources</a>
        <a href="#" className={navbarLink}>Career</a>
        <a href="#" className={navbarLink}>About us</a>
        <a href="#" className={navbarLink}>Contact Us</a>
      </div>

      {/* "Get Started" Button (Right Aligned) */}
      <div className="hidden md:flex items-center flex-shrink-0">
        <button className="bg-transparent border-2 border-[#00FFB9] text-[#00FFB9] px-6 py-2 rounded-full hover:bg-[#00FFB9] hover:text-[#020B2D] transition duration-300">
          Get Started
        </button>
      </div>

    </div>

    {/* Mobile Navigation */}
    <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
      <div className="flex flex-col space-y-4 text-center">
        <a href="#" className="text-white hover:text-[#00FFB9]">Home</a>
        <a href="#" className="text-white hover:text-[#00FFB9]">Services</a>
        <a href="#" className="text-white hover:text-[#00FFB9]">Industries</a>
        <a href="#" className="text-white hover:text-[#00FFB9]">Resources</a>
        <a href="#" className="text-white hover:text-[#00FFB9]">Career</a>
        <a href="#" className="text-white hover:text-[#00FFB9]">About us</a>
        <a href="#" className="text-white hover:text-[#00FFB9]">Contact Us</a>
        <button className="bg-transparent border-2 border-[#00FFB9] text-[#00FFB9] px-6 py-2 rounded-full hover:bg-[#00FFB9] hover:text-[#020B2D] transition duration-300 w-full">
          Get Started
        </button>
      </div>
    </div>

  </div>
</nav>


      {/* Hero Section */}
      <div className="hero-pattern relative flex items-center">
  <div className="container mx-auto px-4 md:px-16 py-32 relative z-10 max-w-7xl">
    <div className="max-w-3xl">
      <h1 className="text-6xl md:text-4xl mb-8 text-white font-extralight leading-tight">
        Transform Your Business with Intelligent
        <br className="hidden md:block" />
        AI & ML Solutions
      </h1>
      <p className="text-xl mb-12 text-gray-300">
        Drive Innovation and Growth with AI-Powered Solutions
      </p>
      <button className="bg-transparent border-2 border-[#00FFB9] text-[#00FFB9] px-8 py-3 rounded-full hover:bg-[#00FFB9] hover:text-[#020B2D] transition duration-300 flex items-center space-x-2 md:ml-0">
        <span>Transform Your Business with AI & ML</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</div>


      {/* Services Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-extralight text-center mb-16">
            Service Offering
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard
              icon={<SvgIcon1 />}
              title="Product Engineering"
              description="Our Product Engineering Services provide end-to-end solutions to transform your ideas into successful, market-ready products."
              buttonText="Transform Your Idea"
              isHighlighted={true}
            />
            <ServiceCard
              icon={<SvgIcon2 />}
              title="Data Engineering"
              description="Transform data into insights: clear governance and powerful analytics unlock your data's potential."
              buttonText="Start Your Data Journey"
            />
            <ServiceCard
              icon={<SvgIcon3 />}
              title="AI ML Services"
              description="Leverage the power of AI and ML to transform data into actionable insights, automate processes, and drive smarter business decisions for sustainable growth."
              buttonText="Transform with AI"
            />
            <ServiceCard
              icon={<CloudIcon />}
              title="Cloud Engineering"
              description="Scale and transform your business with pace and agility using our cloud engineering services."
              buttonText="Unlock Your Cloud Potential"
            />
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-20 bg-gray-100 overflow-hidden">
        <div className=" flex flex-col items-center h-[90vh]">
          <h2 className="text-4xl font-extralight text-gray-900 mb-6 mx-auto">About Us</h2>

          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute hidden lg:block left-0 w-[60%] h-[80%] flex-1">
              <img
                src="/images/about.png"
                alt="Team working"
                className='object-center object-cover h-full w-full'
              />
            </div>
            <div className="static lg:absolute w-[80%] lg:w-[50%] right-0 h-fit bg-white rounded-lg shadow-xl p-8">
              <p className="text-sm md:text-lg lg:text-lg text-gray-700 mb-6 leading-relaxed">
                At Infominez, we are the driving force behind transforming technology into impactful business outcomes. Our team of visionary technologists specializes in AI and ML innovations, along with expertise in fintech, data analytics, and cloud services, to deliver solutions that redefine industry standards. With a deep understanding of AI-driven strategies and a commitment to customer success, we create transformative results that align with our clients&apos; unique goals. By combining technical expertise with creative problem-solving, we enable businesses to unlock the power of data, innovate with confidence, and thrive in today&apos;s AI-driven world.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md">
                Learn More
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <div className="bg-white py-20">
        <div className=" mx-auto client-testimonial px-16">
          <h1 className="text-5xl font-extralight text-left ml-6 mb-16">
            Client Testimonial
          </h1>

          <div className="p-8">
            <div className="w-full xl:w-[70%] mx-auto bg-white relative rounded-lg p-8 flex flex-col md:flex-row gap-8 items-start shadow-box-testimonial mb-8">
              <div className='absolute top-0 right-0 flex gap-2 translate-y-[-60px]'>
                <button className='rounded-full'>
                  <img src="/images/arrow/right.png" alt="right" className='w-12 h-12' />
                </button>
                <button className='rounded-full'>
                  <img src="/images/arrow/left.png" alt="left" className='w-12 h-12' />
                </button>

              </div>
              <div className="hidden right-0 left-0 top-[100px] xl:flex w-full xl:w-1/3 pl-14 translate-y-[-70px] flex-col items-center gap-4 mr-12">
                <div>
                  <img
                    src="/public/images/boss.png"
                    alt="Director"
                    className="w-full h-full object-cover rounded-lg "
                  />
                </div>

                <div className='gap-4 items-center hidden lg:flex'>
                  <button className="flex gap-[6px]">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <p>LinkedIn</p>
                  </button>
                  <button className='flex gap-[6px]'>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <p>Twitter</p>
                  </button>
                </div>
              </div>

              <div className="w-full xl:w-2/3 flex flex-col z-50">
                <div className='flex gap-4'>
                  <div className="mb-8">
                    <QuotesIcon />
                  </div>

                  <div>
                    <p className="text-gray-700 text-sm mt-4 mb-4 leading-relaxed border-b border-gray-300 pb-4">
                      Infominez has been an invaluable strategic technology partner
                      for Paul Merchants, guiding us through the complex landscape of
                      digital financial services. Their expertise in developing robust
                      solutions for Prepaid Instruments, Pre-Paid Cards, BBPS, and
                      UPI, along with a deep understanding of integration protocols
                      and payment gateways, has been crucial to our success. Their
                      strong grasp of the Indian fintech ecosystem has enabled them to
                      deliver innovative and compliant solutions tailored to our
                      needs. Moreover, &apos;s commitment to agile development
                      methodologies and their ability to adapt swiftly to evolving
                      regulatory requirements have been indispensable to our business.
                      We highly value our partnership and look forward to continued
                      collaboration.
                    </p>
                    <div>
                      <h3 className="text-2xl font-medium mb-1">SHAIBU CHERIAN</h3>
                      <p className="text-gray-600">
                        Whole Time Director at Paul Merchants Finance
                      </p>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Clients */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extralight text-center mb-16 text-gray-800">
            Our Trusted Clients
          </h2>

          {/* Top Row */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 items-center mb-12">
            {topRowClients.map((client, index) => (
              <div key={index} className="flex items-center justify-center p-4">
                {/* For development, using placeholder images. Replace with actual logos */}
                <img
                  src={`/images/clients/${client.img}`}
                  alt={client.name}
                  className={client.className + " object-contain"}
                />
              </div>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 items-center">
            {bottomRowClients.map((client, index) => (
              <div key={index} className="flex items-center justify-center p-4">
                {/* For development, using placeholder images. Replace with actual logos */}
                <img
                  src={`/images/clients/${client.img}`}
                  alt={client.name}
                  className={client.className + " object-contain"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extralight text-center mb-4 text-gray-800">
            Ready to Get Started?
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Transforming businesses with data, AI/ML, and cloud solutions
          </p>

          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Your name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Contact email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Contact email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone No<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Phone No"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="Message"
                  className="w-full px-4 py-3 h-[52px] rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-black font-medium py-3 px-10 rounded-lg transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white">
        {/* Top Contact Section */}
        <div className="container mx-auto lg:border-b border-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 lg:pt-0">
            {/* Call Us */}
            <div className="flex items-center gap-4 p-4 md:py-12 lg:border-r border-white">
              <div className="w-12 h-12 rounded-full border-2 border-blue-500 border-dashed flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm">Call Us 7/24</p>
                <p className="font-semibold">+91-987-987-0987</p>
              </div>
            </div>

            {/* Make a Quote */}
            <div className="flex items-center gap-4 p-4 md:py-12 lg:border-r border-white">
              <div className="w-12 h-12 rounded-full border-2 border-blue-500 border-dashed flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm">Make a Quote</p>
                <p className="font-semibold">hello@infominze.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 md:py-12">
              <div className="w-12 h-12 rounded-full border-2 border-blue-500 border-dashed flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm">Location</p>
                <p className="font-semibold">One Neil Road Indore</p>
                <p className="text-sm">Pin-0988804</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="col-span-2">
              <img src="/public/images/infominez.png" alt="Infominez" className="h-12 mb-4" />
              <p className="text-gray-400 text-sm mt-4">
                We are an agency specialising in web design & web automation since 2013
              </p>
            </div>

            {/* Explore */}
            <div>
              <h3 className="text-green-500 font-medium mb-4">Explore</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:text-green-500">HOME</a></li>
                <li><a href="#" className="text-white hover:text-green-500">ABOUT</a></li>
                <li><a href="#" className="text-white hover:text-green-500">PORTFOLIO</a></li>
                <li><a href="#" className="text-white hover:text-green-500">CASESTUDY</a></li>
                <li><a href="#" className="text-white hover:text-green-500">BLOG</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-green-500 font-medium mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:text-green-500">CONTACT US</a></li>
                <li><a href="#" className="text-white hover:text-green-500">PRIVACY POLICY</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-green-500 font-medium mb-4">Social</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:text-green-500 flex items-center gap-3">
                  <img src="/images/socials/linkedin.png" alt="Linkedin" className="h-6 w-6" />
                  LINKEDIN</a></li>
                <li><a href="#" className="text-white hover:text-green-500 flex items-center gap-3">
                  <img src="/images/socials/facebook.png" alt="Facebook" className="h-6 w-6" />
                  FACEBOOK</a></li>
                <li><a href="#" className="text-white hover:text-green-500 flex items-center gap-3">
                  <img src="/images/socials/twitter.png" alt="Twitter" className="h-6 w-6" />
                  TWITTER</a></li>
                <li><a href="#" className="text-white hover:text-green-500 flex items-center gap-3">
                  <img src="/images/socials/instagram.png" alt="Instagram" className="h-6 w-6" />
                  INSTAGRAM</a></li>
              </ul>
            </div>

            {/* Social & Area Section */}
            <div>


              <div>
                <h3 className="text-green-500 font-medium mb-4">Area we Serve</h3>
                <select className="w-full bg-gray-900 text-white p-2 rounded">
                  <option>Select Area</option>
                </select>

                <h3 className="text-green-500 font-medium mb-4 mt-6">Our Service</h3>
                <select className="w-full bg-gray-900 text-white p-2 rounded">
                  <option>Select Service</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-4">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm text-gray-400">
              ©2025 INFOMINEZ All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
