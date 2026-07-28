"use client";

import Link from "next/link";
import { ArrowRight, Search, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black pt-20">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-32 h-96 w-96 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[140px]" />

      <div className="container relative z-10 grid items-center gap-16 py-20 lg:grid-cols-2">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-5 inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-400">
            Discover Local Businesses Near You
          </span>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl">
            Find Everything
            <br />
            <span className="gold-text">Around You</span>
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-8 text-gray-400">
            Search trusted local businesses, discover great offers, connect
            with nearby shops, and support your neighborhood—all in one place.
          </p>

          {/* Search Box */}
          <div className="glass mb-8 flex flex-col gap-4 rounded-2xl p-4 shadow-2xl lg:flex-row">

            <div className="flex flex-1 items-center rounded-xl bg-black/40 px-4">
              <Search className="mr-3 text-yellow-400" />
              <input
                type="text"
                placeholder="Search businesses..."
                className="w-full bg-transparent py-4 outline-none"
              />
            </div>

            <div className="flex items-center rounded-xl bg-black/40 px-4">
              <MapPin className="mr-3 text-yellow-400" />
              <input
                type="text"
                placeholder="Location"
                className="w-full bg-transparent py-4 outline-none"
              />
            </div>

            <Link href="/search">
              <button className="btn-primary h-full px-8">
                Search
              </button>
            </Link>

          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">

            <Link href="/search">
              <button className="btn-primary flex items-center gap-2">
                Explore Now
                <ArrowRight size={18} />
              </button>
            </Link>

            <Link href="/register">
              <button className="btn-outline">
                Register Your Shop
              </button>
            </Link>

          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Phone Body */}
            <div className="h-[650px] w-[320px] rounded-[45px] border border-yellow-500/30 bg-[#111] p-4 shadow-[0_0_60px_rgba(212,175,55,0.2)]">

              {/* Screen */}
              <div className="flex h-full flex-col rounded-[35px] bg-neutral-900 p-5">

                <div className="mb-6 h-2 w-24 self-center rounded-full bg-neutral-700" />

                <h3 className="mb-4 text-xl font-bold">
                  Nearby Businesses
                </h3>

                <div className="space-y-4">

                  {[
                    {
                      name: "AYA Flowers",
                      category: "Flower Shop",
                      rating: "4.9",
                    },
                    {
                      name: "Cut N Cute",
                      category: "Salon",
                      rating: "4.8",
                    },
                    {
                      name: "Fresh Grocery",
                      category: "Grocery",
                      rating: "4.7",
                    },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="rounded-xl border border-yellow-500/10 bg-black/40 p-4"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">{item.name}</h4>
                        <span className="text-yellow-400">
                          ⭐ {item.rating}
                        </span>
                      </div>

                      <p className="mt-2 text-sm text-gray-400">
                        {item.category}
                      </p>
                    </div>
                  ))}

                </div>

                <div className="mt-auto rounded-xl bg-yellow-400 p-4 text-center font-bold text-black">
                  Explore More →
                </div>

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
