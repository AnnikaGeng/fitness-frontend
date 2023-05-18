import { SelectedPage } from "@/share/types"
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion"
import HText from "@/share/HText"
import { ClassType } from "@/share/types";
import Class from "./Class";

const classes: Array<ClassType> = [
    {
        name: "Weight training",
        description: "We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.",
        image: image1
    },
    {
        name: "Yoga",
        image: image2
    },
    {
        name: "Cardio",
        description: "We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.",
        image: image3
    },
    {
        name: "Zumba",
        description: "We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.",
        image: image4
    },
    {
        name: "Aerobics",
        description: "We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.",
        image: image5
    },
    {
        name: "Crossfit",
        description: "We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.",
        image: image6
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section
    className="w-full bg-primary-100 py-40"
    id="ourclasses"
    >
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0}
                }}
            >
                <div className="md:w-3/5">
                    <HText>OUR CLASSES</HText>
                    <p className="my-5 text-sm">
                        We provide world class fitness equipment, trainers and classes to
                        get you to your ultimate fitness goals with ease. We provide true
                        care into each and every member.
                    </p>
                </div>
            </motion.div>
            <div 
                className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden"
            >
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item: ClassType, index) => (
                        <Class 
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    ))}

                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses