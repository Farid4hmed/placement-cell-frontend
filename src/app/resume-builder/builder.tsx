"use client";
import { Provider } from "react-redux";
import { store } from "@/lib/redux/store";
import { ResumeForm } from "@/components/ResumeForm";
import { Resume } from "@/components/Resume";

export default function Create({session}: any) {

  console.log('session', session)
  return (
    <Provider store={store}>
      <main className="relative h-full w-full overflow-hidden mt-0 bg-gray-50">
        <div className="grid grid-cols-3 md:grid-cols-6">
          <div className="col-span-3">
            <ResumeForm />
          </div>
          <div className="col-span-3">
            <Resume reg={session.registration}/>
          </div>
        </div>
      </main>
    </Provider>
  );
}
