// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "@/components/Header";
import MyListing from "./components/MyListing";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Profile = () => {
  return (
    <div>
      <Header />
      <div className="px-10 md:px-20 my-10 ">
        <Tabs defaultValue="My-listing" className="w-full">
          <TabsList className="w-full flex justify-start">
            <TabsTrigger value="My-listing">My listing</TabsTrigger>
            <TabsTrigger value="Inbox">Inbox</TabsTrigger>
            <TabsTrigger value="Profile">Profile</TabsTrigger>
          </TabsList>
          <TabsContent value="My-listing" >
            <MyListing />
          </TabsContent>
          <TabsContent value="Inbox">Change your Inbox here.</TabsContent>
          <TabsContent value="Profile">Change your Profile here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
