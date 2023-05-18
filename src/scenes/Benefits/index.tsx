import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { SelectedPage, BenefitsType } from "@/share/types"
import { motion } from "framer-motion"
import HText from "@/share/HText"
import Benefit from "@/scenes/Benefits/Benefit"
import ActionButton from "@/share/ActionButton"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitsType> = [
    {
        icon: <HomeModernIcon className="w-6 h-6 " />,
        title: "Modern Equipment",
        description: "We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member."
    },
    {
        icon: <UserGroupIcon className="w-6 h-6 " />,
        title: "Group Classes",
        description: "We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member."
    },
    {
        icon: <AcademicCapIcon className="w-6 h-6 " />,
        title: "Certified Trainers",
        description: "We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member."
    },
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* header */}
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: false, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
             hidden: {opacity: 0, x: -50},
             visible: {opacity: 1, x: 0}
            }}
            className="md:my-5 md:w-3/5">
               <HText>MORE THEN JUST GYM</HText>
               <p className="my-5 text-sm">
                We provide world class fitness equipment, trainers and classes to
                get you to your ultimate fitness goals with ease. We provide true
                care into each and every member.
               </p>
            </motion.div>

            {/* benefits */}
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            variants={container}
            className="mt-5 md:flex items-center justify-between gap-8">
                {benefits.map((benefit: BenefitsType) => (
                    <Benefit 
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            {/* graphic and description */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* graphic */}
                <img
                 className="mx-auto"
                 alt="gym"
                 src={BenefitsPageGraphic}
                />

                {/* description */}
                <div>
                    {/* heading */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true, amount: 0.5}}
                                transition={{duration: 1}}
                                variants={{
                                 hidden: {opacity: 0, x: 50},
                                 visible: {opacity: 1, x: 0}
                                }}
                            >
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>
                    {/* description */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{duration: 1, delay: 0.5}}
                        variants={{
                         hidden: {opacity: 0, x: 50},
                         visible: {opacity: 1, x: 0}
                        }}
                    >
                        <p className="my-5">Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                                Felis orci diam odio.</p>
                        <p className="mb-5">Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                            tellus quam porttitor. Mauris velit euismod elementum arcu neque
                            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                            enim mattis odio in risus nunc.</p>
                    </motion.div>
                    {/* button */}
                    <div className="relative mt-16">
                        <div
                            className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles"
                        >
                            <ActionButton
                                setSelectedPage={setSelectedPage}
                            >
                                Join Now
                            </ActionButton>
                        </div>

                    </div>

                </div>
            </div>

        </motion.div>
    </section>
  )
}

export default Benefits