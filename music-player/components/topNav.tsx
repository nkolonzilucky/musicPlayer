import type { NextPage } from 'next';
import Image from "next/image";



const TopNav:NextPage = () => {
  	return (
    		<div style={{width: "100%", position: "relative", height: "3.813rem", textAlign: "left", fontSize: "1.25rem", color: "rgba(255, 255, 255, 0.5)", fontFamily: "Inter",}}>
      			<Image style={{position: "absolute", top: "0.75rem", left: "0rem", width: "2rem", height: "2rem", overflow: "hidden",}} width={32} height={32} alt="" src="dropdownIcon.svg" />
      			<div style={{position: "absolute", top: "0rem", left: "7.125rem", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start",}}>
        				<div style={{width: "9.406rem", borderRadius: "1000px", backgroundColor: "#323232", height: "3.813rem", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", padding: "1rem 2.437rem", boxSizing: "border-box",}}>
          					<div style={{position: "relative", fontWeight: "600",}}>Video</div>
        				</div>
        				<div style={{width: "9.406rem", borderRadius: "1000px", backgroundColor: "#3d3d3d", height: "3.813rem", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", padding: "1rem 1.562rem", boxSizing: "border-box", marginLeft: "-1.5rem",}}>
          					<div style={{position: "relative", fontWeight: "600",}}>Song</div>
        				</div>
      			</div>
      			<div style={{position: "absolute", top: "0.75rem", left: "28.375rem", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: "1.312rem",}}>
        				<Image style={{width: "2rem", position: "relative", height: "2rem", overflow: "hidden", flexShrink: "0",}} width={32} height={32} alt="" src="screencast.svg" />
        				<Image style={{width: "2rem", position: "relative", height: "2rem", overflow: "hidden", flexShrink: "0",}} width={32} height={32} alt="" src="userMenu.svg" />
      			</div>
    		</div>);
};

export default TopNav;
