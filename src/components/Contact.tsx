// src/components/Contact.tsx
import { useForm } from 'react-hook-form';
import { FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false); // 👈
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://formspree.io/f/xyzzvdew", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      reset();
      setShowSuccess(true); // ✅ show success
      setTimeout(() => setShowSuccess(false), 3000); // ✅ auto-hide
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='border-1 border-black'> 
    <section id="contact" className="py-20 px-4 max-w-4xl md:max-w-3xl mx-auto ">
      <h2 className="text-4xl font-light text-center mb-10 mt-5  text-black text-gradient">
        GET IN TOUCH
      </h2>
      
      {showSuccess ? ( 
        <div className="bg-white text-green-400 p-6 rounded-xl border border-green-800 text-center">
        <p className="font-light">🎉Message sent successfully! 🎉</p>
        <p className='text-black font-semibold'>{`I'll get back to you soon.`}</p>
      </div>
       ): (
        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className="space-y-6 bg-white p-8 rounded-xl border border-gray-800"
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-gray-800">
              Name {errors.name && <span className="text-coachella-pink">*</span>}
            </label>
            <input
              id="name"
              {...register("name", { required: "Name is required" })}
              className={`w-full px-4 py-3 bg-green-100 border border-gray-700 text-black ${
                errors.name
              } rounded-lg`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-coachella-pink">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-gray-800">
              Email {errors.email && <span className="text-black">*</span>}
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              className={`w-full px-4 py-3 bg-green-100 border text-black border-gray-800 ${
                errors.email 
              } rounded-lg`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-coachella-pink">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-gray-800">
              Message {errors.message && <span className="text-red-600">*</span>}
            </label>
            <textarea
              id="message"
              rows={5}
              {...register("message", { 
                required: "Message is required",
                minLength: {
                  value: 20,
                  message: "Message must be at least 20 characters"
                }
              })}
              className={`w-full px-4 py-3 bg-green-100 text-black border border-gray-800 ${
                errors.message 
              } rounded-lg`}
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-coachella-pink">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mx-3 bg-gray-700 text-white hover:bg-gray-900 hover:text-green-300 font-light py-2 px-6 bg-gradient-to-r rounded-full cursor-pointer"
          >
        {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <FaPaperPlane /> Send Message
              </>
            )}
          </button>
        </form>
      )}
    </section>
    </div>
  );
}