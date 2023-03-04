import { Button, Stack, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.png";
import Link from "next/link";
import { Menu as Symbol, Close } from "@mui/icons-material";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div
      className="h-20 flex items-center p-3 bg-opacity-90 bg-clip-padding justify-between md:justify-around sticky top-0 z-50 border-b-2 border-gray-500 "
      style={{ backdropFilter: "blur(10px)" }}
    >
      <Link href="/">
        <Image src={logo} height={50} className="-rotate-12" alt="logo-image" />
      </Link>
      <div className=" hidden md:block space-x-2">
        <Link href="/projects">
          <Button
            className="font-bold text-base capitalize text-black border"
            variant="outlined"
          >
            Projects
          </Button>
        </Link>
        <Link href="/blogs">
          <Button
            className="font-bold text-base capitalize text-black"
            variant="outlined"
          >
            Blogs
          </Button>
        </Link>
        <Link href="/about">
          <Button
            className="font-bold text-base capitalize text-black"
            variant="outlined"
          >
            About
          </Button>
        </Link>
        <Link href="/contact">
          <Button
            className="font-bold text-base capitalize text-black"
            variant="outlined"
          >
            Contact
          </Button>
        </Link>
      </div>
      <div className="md:hidden">
        <Button
          className="font-bold capitalize text-black"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {open ? <Close /> : <Symbol />}
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Link href="/projects">
            <MenuItem onClick={handleClose}>Projects</MenuItem>
          </Link>
          <Link href="/blogs">
            <MenuItem onClick={handleClose}>Blogs</MenuItem>
          </Link>
          <Link href="/about">
            <MenuItem onClick={handleClose}>About</MenuItem>
          </Link>
          <Link href="/contact">
            <MenuItem onClick={handleClose}>Contact</MenuItem>
          </Link>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
