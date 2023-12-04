import React from "react";

const Symbols = () => {
  return (
    <div
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      <svg aria-hidden="true">
        <defs>
          <symbol id="icon-linkedin" viewBox="0 0 32 32">
            <path d="M27.429 2.667H4.566c-1.048 0-1.899.863-1.899 1.923v22.822c0 1.059.851 1.923 1.899 1.923h22.863a1.918 1.918 0 0 0 1.905-1.923V4.59c0-1.06-.857-1.923-1.905-1.923zM10.726 25.524H6.774V12.798h3.958v12.726h-.006zM8.75 11.06a2.293 2.293 0 0 1 0-4.584 2.297 2.297 0 0 1 2.292 2.292A2.29 2.29 0 0 1 8.75 11.06zm16.792 14.464H21.59v-6.19c0-1.476-.03-3.375-2.054-3.375-2.06 0-2.375 1.607-2.375 3.268v6.298h-3.952V12.799h3.792v1.738h.054c.53-1 1.821-2.054 3.744-2.054 4 0 4.744 2.637 4.744 6.065v6.976z" />
          </symbol>
          <symbol id="icon-Twitter" viewBox="0 0 32 32">
            <path d="M28.571 0H3.428A3.43 3.43 0 0 0-.001 3.429v25.143a3.43 3.43 0 0 0 3.429 3.429h25.143A3.43 3.43 0 0 0 32 28.572V3.429A3.43 3.43 0 0 0 28.571 0zm-3.492 11.343c.014.2.014.407.014.607 0 6.193-4.714 13.329-13.329 13.329-2.657 0-5.121-.771-7.193-2.1.379.043.743.057 1.129.057a9.392 9.392 0 0 0 5.814-2 4.692 4.692 0 0 1-4.379-3.25c.721.107 1.371.107 2.114-.086a4.685 4.685 0 0 1-3.75-4.6v-.057c.621.35 1.35.564 2.114.593a4.672 4.672 0 0 1-2.085-3.9c0-.871.229-1.671.636-2.364a13.3 13.3 0 0 0 9.657 4.9c-.664-3.179 1.714-5.757 4.571-5.757 1.35 0 2.564.564 3.421 1.479a9.173 9.173 0 0 0 2.971-1.129 4.675 4.675 0 0 1-2.057 2.579 9.3 9.3 0 0 0 2.7-.729 9.88 9.88 0 0 1-2.35 2.429z" />
          </symbol>
          <symbol id="icon-Facebook" viewBox="0 0 32 32">
            <path d="M28.571 0H3.428A3.428 3.428 0 0 0 0 3.428v25.143a3.428 3.428 0 0 0 3.428 3.428h9.804V21.12h-4.5v-5.121h4.5v-3.903c0-4.439 2.643-6.891 6.691-6.891 1.939 0 3.966.346 3.966.346v4.357h-2.233c-2.201 0-2.887 1.366-2.887 2.766v3.325h4.913l-.786 5.121h-4.127v10.879h9.804a3.428 3.428 0 0 0 3.428-3.428V3.428A3.428 3.428 0 0 0 28.573 0z" />
          </symbol>
          <symbol id="icon-Instagram" viewBox="0 0 32 32">
            <path d="M16 12.19c-.754 0-1.49.224-2.116.643s-1.114 1.014-1.403 1.71a3.803 3.803 0 0 0 .827 4.151 3.817 3.817 0 0 0 4.152.825 3.814 3.814 0 0 0 2.352-3.52 3.808 3.808 0 0 0-3.811-3.81zm8.908-2.929a3.854 3.854 0 0 0-2.173-2.173c-1.5-.592-5.072-.459-6.736-.459s-5.232-.138-6.736.459A3.854 3.854 0 0 0 7.09 9.261c-.591 1.5-.459 5.075-.459 6.738s-.132 5.234.462 6.739a3.854 3.854 0 0 0 2.173 2.172c1.5.592 5.072.459 6.736.459s5.232.138 6.736-.459a3.866 3.866 0 0 0 2.173-2.172c.596-1.5.459-5.075.459-6.738s.137-5.233-.459-6.738l-.003-.001zM16 21.857a5.862 5.862 0 0 1-5.411-3.616 5.86 5.86 0 0 1 7.653-7.653 5.86 5.86 0 0 1 1.902 9.555A5.851 5.851 0 0 1 16 21.857zm6.099-10.593a1.371 1.371 0 0 1-1.264-.843 1.361 1.361 0 0 1 .296-1.49 1.363 1.363 0 0 1 1.49-.296 1.368 1.368 0 0 1 .742 1.788 1.353 1.353 0 0 1-.738.741 1.383 1.383 0 0 1-.523.105l-.003-.003zM28.571 0H3.428A3.428 3.428 0 0 0 0 3.428v25.143a3.428 3.428 0 0 0 3.428 3.428h25.143a3.428 3.428 0 0 0 3.428-3.428V3.428A3.428 3.428 0 0 0 28.571 0zm-1.222 20.714c-.092 1.831-.51 3.453-1.847 4.786s-2.957 1.759-4.786 1.846c-1.886.106-7.542.106-9.429 0-1.831-.092-3.447-.511-4.786-1.846s-1.759-2.959-1.846-4.786c-.106-1.887-.106-7.544 0-9.429.092-1.831.505-3.453 1.846-4.786s2.962-1.754 4.786-1.841c1.886-.106 7.542-.106 9.429 0 1.831.092 3.452.511 4.786 1.846s1.759 2.959 1.847 4.789c.106 1.88.106 7.531 0 9.42z" />
          </symbol>
          <symbol id="icon-GitHub" viewBox="0 0 32 32">
            <path d="M28.089.615H3.913A3.298 3.298 0 0 0 .616 3.912v24.176a3.298 3.298 0 0 0 3.297 3.297h24.176a3.298 3.298 0 0 0 3.297-3.297V3.912A3.298 3.298 0 0 0 28.089.615zm-8.427 26.353c-.577.103-.79-.254-.79-.549 0-.371.014-2.267.014-3.798 0-1.071-.357-1.751-.776-2.108 2.541-.282 5.22-.632 5.22-5.021 0-1.25-.446-1.875-1.174-2.679.117-.295.508-1.511-.117-3.091-.955-.295-3.139 1.229-3.139 1.229-.907-.254-1.889-.385-2.857-.385s-1.951.13-2.857.385c0 0-2.184-1.525-3.139-1.229-.625 1.573-.24 2.788-.117 3.091-.728.804-1.071 1.429-1.071 2.679 0 4.368 2.562 4.739 5.103 5.021-.33.295-.625.804-.728 1.532-.652.295-2.321.804-3.317-.955a2.392 2.392 0 0 0-1.751-1.174c-1.113-.014-.076.701-.076.701.742.343 1.264 1.662 1.264 1.662.666 2.04 3.853 1.353 3.853 1.353 0 .955.014 2.507.014 2.789 0 .295-.206.652-.79.549-4.533-1.518-7.706-5.831-7.706-10.872 0-6.305 4.821-11.092 11.126-11.092s11.415 4.787 11.415 11.092c.007 5.041-3.07 9.361-7.603 10.872zm-6.738-4.196c-.131.027-.254-.027-.268-.117-.014-.103.076-.192.206-.22.13-.014.254.041.268.13.021.089-.069.179-.206.206zm-.652-.062c0 .089-.103.165-.24.165-.151.014-.254-.062-.254-.165 0-.089.103-.165.24-.165.13-.014.254.062.254.165zm-.941-.075c-.027.089-.165.13-.282.089-.13-.027-.22-.13-.192-.22s.165-.131.282-.103c.137.041.227.144.192.233zm-.845-.371c-.062.076-.192.062-.295-.041-.103-.089-.13-.22-.062-.282.062-.076.192-.062.295.041.089.089.124.227.062.281zm-.625-.625c-.062.041-.179 0-.254-.103s-.076-.22 0-.268c.076-.062.192-.014.254.089.076.103.076.227 0 .282zm-.446-.666c-.062.062-.165.028-.24-.041-.076-.089-.089-.192-.027-.241.062-.062.165-.027.24.041.076.089.089.192.027.24zm-.461-.509c-.027.062-.117.076-.192.027-.089-.041-.13-.117-.103-.179.027-.041.103-.062.192-.027.089.048.13.124.103.179z" />
          </symbol>
          <symbol id="icon-Mail" viewBox="0 0 34 32">
            <path d="M4.205 9.414 17 15.811l12.795-6.397A3.198 3.198 0 0 0 26.599 6.4h-19.2a3.203 3.203 0 0 0-3.196 3.014z" />
            <path d="m29.8 12.989-12.8 6.4-12.8-6.4V22.4a3.2 3.2 0 0 0 3.2 3.2h19.2a3.2 3.2 0 0 0 3.2-3.2v-9.411z" />
          </symbol>
        </defs>
      </svg>
    </div>
  );
};

export default Symbols;