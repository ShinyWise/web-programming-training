import Navbar from "@/components/ui/navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-blue-600">
          Contact Me
        </h1>
        <p className="text-lg text-gray-700">
          THIS IS CONTACT PAGE, CONTACT ME LATER YA? 😄
        </p>
      </main>
    </>
  );
}