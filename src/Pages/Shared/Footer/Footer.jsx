import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa6";
import moment from "moment";

const Footer = () => {
    return (
        <div className="text-[#FFFFFF] mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-[#1f2937] text-center py-24">
                    <p className="text-3xl mb-6">CONTACT US</p>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className="bg-[#111827] text-center py-24">
                    <p className="text-3xl mb-6">Follow US</p>
                    <div className="flex items-center justify-center gap-6">
                        <div><button className="btn rounded-full"><FaFacebookF /></button></div>
                        <div><button className="btn rounded-full"><AiFillInstagram /></button></div>
                        <div><button className="btn rounded-full"><FaTwitter /></button></div>
                    </div>
                </div>
            </div>
            <div className="bg-[#151515] py-[17px] text-center font-medium text-xl">
                <p>Copyright © {moment().format("YYYY")} CulinaryCloud. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;