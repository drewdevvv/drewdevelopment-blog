import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Andrew <small className="text-2xl md:text-4xl text-gray-600 mr-2">(aka drew)</small>Ponce
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
       This is my {CMS_NAME}.
      </h4>
      <div className="mt-5 flex space-x-4">
        <a href="https://myportfoliostuff.s3.us-east-2.amazonaws.com/AndrewDrewPonce_Resume1.pdf" download className="btn btn-primary flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" className="w-6 h-6 object-cover" fill="white"><path d="M9.878,18.122a3,3,0,0,0,4.244,0l3.211-3.211A1,1,0,0,0,15.919,13.5l-2.926,2.927L13,1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1l-.009,15.408L8.081,13.5a1,1,0,0,0-1.414,1.415Z"/><path d="M23,16h0a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V17a1,1,0,0,0-1-1H1a1,1,0,0,0-1,1v4a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V17A1,1,0,0,0,23,16Z"/></svg>
        </a>
        <a href="https://github.com/drewdevvv" target="_blank" className="btn btn-secondary flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" className="w-6 h-6 object-cover" fill="white"><path d="M24,4c0-2.206-1.794-4-4-4s-4,1.794-4,4c0,1.86,1.277,3.428,3,3.873v.127c0,1.654-1.346,3-3,3H8c-1.125,0-2.164,.374-3,1.002V7.873c1.723-.445,3-2.013,3-3.873C8,1.794,6.206,0,4,0S0,1.794,0,4c0,1.86,1.277,3.428,3,3.873v8.253c-1.723,.445-3,2.013-3,3.873,0,2.206,1.794,4,4,4s4-1.794,4-4c0-1.86-1.277-3.428-3-3.873v-.127c0-1.654,1.346-3,3-3h8c2.757,0,5-2.243,5-5v-.127c1.723-.445,3-2.013,3-3.873ZM2,4c0-1.103,.897-2,2-2s2,.897,2,2-.897,2-2,2-2-.897-2-2ZM6,20c0,1.103-.897,2-2,2s-2-.897-2-2,.897-2,2-2,2,.897,2,2ZM20,6c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/drew-ponce" target="_blank" className="btn btn-secondary flex items-center justify-center w-12 h-12 rounded-full bg-blue-700 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 object-cover" fill="white"><g id="_01_align_center" data-name="01 align center"><path d="M21,24H19V18.957A2.96,2.96,0,0,0,16.043,16H7.957A2.96,2.96,0,0,0,5,18.957V24H3V18.957A4.963,4.963,0,0,1,7.957,14h8.086A4.963,4.963,0,0,1,21,18.957Z"/><path d="M12,12a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,12ZM12,2a4,4,0,1,0,4,4A4,4,0,0,0,12,2Z"/></g></svg>
        </a>
      </div>
    </section>
  );
}