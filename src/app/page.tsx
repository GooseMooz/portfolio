"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ExternalLink, Code, Download, Star, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("experience")

  const experienceProjects = [
    {
      title: "Qolt",
      description: "iOS app and NFC tag to solve procrastination once and for all.",
      tech: [
        { name: "Swift", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
        { name: "Python", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
        { name: "Kafka", color: "bg-white/20 text-white border-white/30" },
        { name: "MySQL", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
      ],
      status: "Building",
      gradient: "from-orange-500 to-orange-600",
      link: "https://qolt.ca"
    },
    {
      title: "CSM MapBan Service",
      description: "Service for creating, streaming, and organizing cybersport tournaments.",
      tech: [
        { name: "TypeScript", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
        { name: "React", color: "bg-sky-400/20 text-sky-300 border-sky-400/30" },
        { name: "Express", color: "bg-white/20 text-white border-white/30" },
        { name: "Kubernetes", color: "bg-blue-300/20 text-blue-200 border-blue-300/30" },
      ],
      status: "Live",
      gradient: "from-gray-600 to-gray-700",
      link: "https://mapban.csmpro.ru/"
    },
    {
      title: "SFU CS-Coder",
      description: "Platform for SFU students to practice competitive programming.",
      tech: [
        { name: "TypeScript", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
        { name: "React.js", color: "bg-sky-400/20 text-sky-300 border-sky-400/30" },
        { name: "PostgreSQL", color: "bg-blue-600/20 text-blue-300 border-blue-600/30" },
        { name: "Kubernetes", color: "bg-blue-300/20 text-blue-200 border-blue-300/30" },
      ],
      status: "Live",
      gradient: "from-gray-600 to-gray-700",
      link: "https://cs-coder.cmpt.sfu.ca"
    },
  ]

  const personalProjects = [
    {
      title: "Blockchain Implementation",
      description: "Optimized Bitcoin implementation with additional optimization features.",
      tech: [
        { name: "Python", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
        { name: "Cryptography", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
      ],
      status: "Complete",
      gradient: "from-gray-600 to-gray-700",
    },
    {
      title: "Boiling Kettle CV Algorithm",
      description: "Computer vision algorithm to detect when a kettle is boiling using visual cues.",
      tech: [
        { name: "Python", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
        { name: "OpenCV", color: "bg-green-500/20 text-green-400 border-green-500/30" }
      ],
      status: "Complete",
      gradient: "from-gray-600 to-gray-700",
    },
  ]

  return (
      <div className="min-h-screen bg-[#0a0a0f]">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-xl font-bold text-white hover:text-orange-500 transition-colors"
              >
                TZ
              </button>
              <div className="hidden md:flex items-center space-x-8">
                {["Experience", "Projects", "Writing", "Contact"].map((item) => (
                    <button
                        key={item}
                        onClick={() => setActiveTab(item.toLowerCase())}
                        className={`text-sm transition-colors ${
                            activeTab === item.toLowerCase() ? "text-orange-500" : "text-white/70 hover:text-white"
                        }`}
                    >
                      {item}
                    </button>
                ))}
              </div>
              <a href="/CV_TIMOFEY_ZHUCHKOV.pdf"
                 target="_blank"
                 rel="noopener noreferrer">
                <Button
                    variant="outline"
                    size="sm"
                    className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  <Download className="w-4 h-4 mr-2" />
                  CV
                </Button>
              </a>
            </div>
          </div>
        </nav>

        <div className="pt-20">
          {/* Compact Hero + About Section */}
          <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12 items-start">
                {/* Left Column - Hero */}
                <div className="lg:col-span-1">
                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center lg:text-left"
                  >
                    <div className="w-24 h-24 mx-auto lg:mx-0 mb-8 relative">
                      <div className="absolute inset-0 bg-orange-500 rounded-full" />
                      <div className="absolute inset-1 bg-[#0a0a0f] rounded-full overflow-hidden">
                        <Image
                            width="516"
                            height="516"
                            src="/pfp.jpg"
                            alt="Timofey Zhuchkov"
                            className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Timofey Zhuchkov</h1>

                    <p className="text-xl text-orange-500 mb-6">Co-Founder @ Qolt 🧠</p>

                    <div className="flex justify-center lg:justify-start mb-8">
                      <Badge
                          variant="secondary"
                          className="bg-orange-500/10 text-orange-500 border-orange-500/20 text-sm px-4 py-2 pointer-events-none"
                      >
                        <Code className="w-4 h-4 mr-2" />
                        Full-Stack Developer
                      </Badge>
                    </div>

                    <div className="flex gap-3 justify-center lg:justify-start">
                      <a href="mailto:tza98@sfu.ca"
                         target="_blank"
                         rel="noopener noreferrer">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                          <Mail className="w-4 h-4 mr-2" />
                          tza98@sfu.ca
                        </Button>
                      </a>
                      <a href="https://www.linkedin.com/in/goosemooz/"
                         target="_blank"
                         rel="noopener noreferrer">
                        <Button size="sm" className="bg-white text-black hover:bg-white/80">
                          <Linkedin className="w-4 h-4" />
                        </Button>
                      </a>
                      <a href="https://github.com/GooseMooz"
                         target="_blank"
                         rel="noopener noreferrer">
                        <Button size="sm" className="bg-white text-black hover:bg-white/80">
                          <Github className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </motion.div>
                </div>

                {/* Middle Column - About */}
                <div className="lg:col-span-1">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <h2 className="text-2xl font-bold text-white mb-6">About</h2>
                    <p className="text-white/80 text-sm leading-relaxed mb-8">
                      Developing skill through doing, guiltlessly exploring passion and interests, imbuing quality. All I
                      want to do is build long-lasting experiences.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center text-sm text-white/60">
                        <MapPin className="w-4 h-4 mr-3 text-orange-500" />
                        Vancouver, BC
                      </div>
                      <div className="flex items-center text-sm">
                        <Calendar className="w-4 h-4 mr-3 text-orange-500" />
                        <motion.span
                            className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent"
                            animate={{
                              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                            }}
                            style={{
                              backgroundSize: "200% 200%",
                            }}
                        >
                          Available for opportunities
                        </motion.span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column - Featured */}
                <div className="lg:col-span-1">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    <h2 className="text-2xl font-bold text-white mb-6">Featured</h2>
                    <div className="relative">
                      {/* Animated outer glow */}
                      <motion.div
                          className="absolute -inset-2 bg-gradient-to-r from-orange-500/30 via-orange-400/40 to-orange-500/30 rounded-xl blur-lg"
                          animate={{
                            opacity: [0.3, 0.6, 0.3],
                            scale: [1, 1.02, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                      />

                      <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group relative">
                        <CardContent className="p-6 relative z-10">
                          <div className="w-full h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden shadow-lg shadow-orange-500/25">
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="relative z-10 text-center">
                              <h3 className="text-xl font-bold text-white mb-1">Qolt</h3>
                              <Badge variant="secondary" className="bg-white/20 text-white text-xs pointer-events-none">
                                Productivity Startup
                              </Badge>
                            </div>
                          </div>

                          <p className="text-white/80 text-sm leading-relaxed mb-4">
                            Revolutionary technology to break free from digital distractions. One tap to focus, one
                            tap to freedom.
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {experienceProjects[0].tech.map((tech) => (
                                <Badge
                                    key={tech.name}
                                    variant="secondary"
                                    className={`${tech.color} text-xs pointer-events-none`}
                                >
                                  {tech.name}
                                </Badge>
                            ))}
                          </div>

                          <a href="https://qolt.ca/"
                             target="_blank"
                             rel="noopener noreferrer">
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300">
                              Learn More
                              <ExternalLink className="w-3 h-3 ml-2" />
                            </Button>
                          </a>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Tab Navigation */}
          <section className="px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-center mb-12">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-1 border border-white/10 w-full max-w-2xl">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
                    {["experience", "projects", "writing", "contact"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-3 md:px-8 py-3 rounded-md text-sm font-medium transition-all ${
                                activeTab === tab
                                    ? "bg-orange-500 text-white"
                                    : "text-white/70 hover:text-white hover:bg-white/5"
                            }`}
                        >
                          {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tab Content */}
              <div className="min-h-[400px]">
                {activeTab === "experience" && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                      {experienceProjects.map((project) => (
                          <a key={project.link}
                             href={project.link}
                             target="_blank"
                             rel="noopener noreferrer">
                            <Card
                                key={project.title}
                                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                            >
                              <CardContent className="p-6">
                                <div
                                    className={`w-full h-32 bg-gradient-to-br ${project.gradient} rounded-lg mb-4 flex items-center justify-center relative overflow-hidden`}
                                >
                                  <div className="absolute inset-0 bg-black/20" />
                                  <div className="relative z-10 text-center">
                                    <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                                    <Badge variant="secondary" className="bg-white/20 text-white text-xs pointer-events-none">
                                      {project.status}
                                    </Badge>
                                  </div>
                                </div>

                                <p className="text-white/80 text-sm leading-relaxed mb-3">{project.description}</p>

                                <div className="flex flex-wrap gap-1 mb-3">
                                  {project.tech.map((tech) => (
                                      <Badge
                                          key={tech.name}
                                          variant="secondary"
                                          className={`${tech.color} text-xs pointer-events-none`}
                                      >
                                        {tech.name}
                                      </Badge>
                                  ))}
                                </div>


                                <a href={project.link}
                                   target="_blank"
                                   rel="noopener noreferrer">
                                  <Button variant="ghost" size="sm" className="text-orange-500 hover:text-orange-400 p-0 h-auto">
                                    Learn More
                                    <ExternalLink className="w-3 h-3 ml-1" />
                                  </Button>
                                </a>
                              </CardContent>
                            </Card>
                          </a>
                      ))}
                    </motion.div>
                )}

                {activeTab === "projects" && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                      {personalProjects.map((project) => (
                          <Card
                              key={project.title}
                              className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                          >
                            <CardContent className="p-6">
                              <div
                                  className={`w-full h-32 bg-gradient-to-br ${project.gradient} rounded-lg mb-4 flex items-center justify-center relative overflow-hidden`}
                              >
                                <div className="absolute inset-0 bg-black/20" />
                                <div className="relative z-10 text-center">
                                  <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                                  <Badge variant="secondary" className="bg-white/20 text-white text-xs pointer-events-none">
                                    {project.status}
                                  </Badge>
                                </div>
                              </div>

                              <p className="text-white/80 text-sm leading-relaxed mb-3">{project.description}</p>

                              <div className="flex flex-wrap gap-1 mb-3">
                                {project.tech.map((tech) => (
                                    <Badge
                                        key={tech.name}
                                        variant="secondary"
                                        className={`${tech.color} text-xs pointer-events-none`}
                                    >
                                      {tech.name}
                                    </Badge>
                                ))}
                              </div>

                              <a href="https://github.com/GooseMooz"
                                 target="_blank"
                                 rel="noopener noreferrer">
                                <Button variant="ghost" size="sm" className="text-orange-500 hover:text-orange-400 p-0 h-auto">
                                  Learn More
                                  <ExternalLink className="w-3 h-3 ml-1" />
                                </Button>
                              </a>
                            </CardContent>
                          </Card>
                      ))}
                    </motion.div>
                )}

                {activeTab === "writing" && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                      <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                        <CardContent className="p-10">
                          <div className="flex items-start space-x-8">
                            <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Star className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-white mb-4">Obsidian Daily</h3>
                              <p className="text-white/80 mb-8 leading-relaxed">
                                Simple yet efficient Obsidian templates for variety of daily tasks to use with Templatr plugin.
                                These templates help
                                organize thoughts, track progress, and maintain consistency in daily workflows.
                              </p>
                              <a href="https://github.com/GooseMooz/obsidian"
                                 target="_blank"
                                 rel="noopener noreferrer">
                                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                                  View Templates
                                  <ExternalLink className="w-4 h-4 ml-2" />
                                </Button>
                              </a>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                )}

                {activeTab === "contact" && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                      <h2 className="text-3xl font-bold text-white mb-6">Let&#39;s Connect</h2>
                      <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
                        Ready to collaborate on something amazing? Let&#39;s build the future together.
                      </p>

                      <div className="grid md:grid-cols-3 gap-8">
                        <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
                          <CardContent className="p-8 text-center">
                            <Mail className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                            <h3 className="text-white font-semibold mb-2">Email</h3>
                            <p className="text-white/70 text-sm mb-4">tza98@sfu.ca</p>
                            <a href="mailto:tza98@sfu.ca"
                               target="_blank"
                               rel="noopener noreferrer">
                              <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-orange-500/30 text-orange-500 hover:bg-orange-500/10 hover:text-white"
                              >
                                Send Email
                              </Button>
                            </a>

                          </CardContent>
                        </Card>

                        <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
                          <CardContent className="p-8 text-center">
                            <Linkedin className="w-10 h-10 text-white/70 mx-auto mb-4" />
                            <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
                            <p className="text-white/70 text-sm mb-4">Social Profile</p>
                            <a href="https://linkedin.com/in/obsidian"
                               target="_blank"
                               rel="noopener noreferrer">
                              <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-white/20 text-black hover:text-white hover:bg-white/5"
                              >
                                Connect
                              </Button>
                            </a>
                          </CardContent>
                        </Card>

                        <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
                          <CardContent className="p-8 text-center">
                            <Github className="w-10 h-10 text-white/70 mx-auto mb-4" />
                            <h3 className="text-white font-semibold mb-2">GitHub</h3>
                            <p className="text-white/70 text-sm mb-4">Code repositories</p>
                            <Button
                                size="sm"
                                variant="outline"
                                className="border-white/20 text-black hover:text-white hover:bg-white/5"
                            >
                              Follow
                            </Button>
                          </CardContent>
                        </Card>
                      </div>
                    </motion.div>
                )}
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 px-6 mt-16 border-t border-white/5">
            <div className="max-w-7xl mx-auto text-center">
              <p className="text-white/50 text-sm">
                © 2025 Timofey Zhuchkov. Solving procrastination once and for all 🎯
              </p>
            </div>
          </footer>
        </div>
      </div>
  )
}
