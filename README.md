# Threads-Follow-Back-Tracker
![GitHub last commit](https://img.shields.io/github/last-commit/Xiang511/Threads-Follower?display_timestamp=committer&style=flat-square) ![GitHub commit activity](https://img.shields.io/github/commit-activity/y/Xiang511/Threads-Follower?style=flat-square) ![GitHub Created At](https://img.shields.io/github/created-at/Xiang511/Threads-Follower?style=flat-square) ![GitHub License](https://img.shields.io/github/license/Xiang511/Threads-Follower?style=flat-square) <img src="https://hits.dwyl.com/Xiang511/Instagram-Follow-Back-Tracker.svg?style=flat-square" alt="">

This method utilizes Instagram's "Download Your Data" feature to retrieve a list of your followers and following. By comparing the two lists, you can identify those who no longer follow you back.This tool only requires a JSON file and does not require any authorization or authentication. 

> [!IMPORTANT]
> This version primarily adds image functionality( Other features will be added in the future ).
>
> If you want to quickly obtain a list of people who don't follow you, please go [here](https://xiang511.com/Instagram-Follow-Back-Tracker/threads.html).

## Features

- [x] Optimize website interface
- [x] See who's not following me back on Threads
- [x] Add a timeline to show how long a user has been following someone

## Preparation

Navigate to the Account Management Center and Locate Your [Information and Privacy Page](https://accountscenter.instagram.com/info_and_permissions/)

Click ``` Download information ```  > ``` partail Information ``` > ``` Threads (only) ``` > data range : ``` all the time ``` > Format select ``` json``` 

## Process Downloaded Data

Once you receive the download completion email, click the link to download the ZIP file.

Extract the ZIP file and locate the ```followers.json``` and ```following.json``` files.

Next, please go to  the [Website](https://xiang511.com/Instagram-Follow-Back-Tracker/threads.html)  and upload your JSON file. You can then download your JSON data by checking the box.

Then, you will get a file named ``` filteredFollowingValues.json``` (Please keep it on hold for now. We will use it later.).

Okay, we're all set. Let's start!


## Usage

1. Download this repository.  or use ``` git clone https://github.com/Xiang511/Threads-Follower.git ``` 
2. Place the filteredFollowingValues.json file into the folder. ``` (Without this data, it will not work.) ```
3. Your file tree will grow to look like this.
   
![image](https://github.com/user-attachments/assets/3e349d82-453b-49b1-b1d9-77fd80cf0f08)


4. ``` npm i threads-follower ```
   
5. ``` "start": "node FetchAllUserPicture.js" ```
   
6. The program will then gradually crawl images of people who don't follow you. (This may take some time.)
   
7. Then, you will get a file named ``` AppData.json``` (Please keep it on hold for now. We will use it later.)
    
8. Start your web server (I personally prefer [FiveServer](https://marketplace.visualstudio.com/items?itemName=yandeu.five-server)) and access the 測試網站 and upload the AppData.json file.
  
9. Done


## Data Privacy Policy

This website does not retain any relevant information, it only offers search capabilities.


## License

This project is published under Apache-2.0 license

