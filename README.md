:zap: :computer: :zap: Tri-Co Hackathon 2023 :zap: :computer: :zap:


# Group Recipe Generator

*This is a sample submission repository for Tri-Co Hackathon 2023. You can use this repo as a template for your repository, or create your own repo and add this README.md file with the following information about your team*

## Flav-Lab

Please email tlei@haverford.edu for communications.

## Team Members

- Lei Lei, Haverford College
- Olivia Medeiros-Sakimoto, Swarthmore College
- Grace Nasrallah, Haverford College

## Project Description

A website that will generate recipes you can share with your friends based on your:
- available ingredients 
- allergies 
- cooking experience
- time wise
- cooking material

The website is friendly designed and easy to use- no membership needed- no subscription- everyone can use it

## Protoype Summary

We struggled with implementing code for the hackathon because none of us are truly technical or possess enough experience with fullstack development to understand how to efficiently develop a webapp codebase. 

### Figma Prototype**

**Background**
Our Figma prototype demonstrates the dream behind the app. A user should be able to add in their available ingredients and generate a recipe, and once they've generated that recipe page, they can share it with their friends to add even more available ingredients (and automatically change the available recipes!). Liv is a product designer, so it was easier to focus on Figma for a somewhat functional Figma prototype that illustrated the basic functionality behind the app. Lei and Grace are both CS students so they were helpful in translating the vision behind the idea of the app into technical language (for example, the idea of a search bar with "tags" that pop up, which would be similar to what you'd see with LinkedIn skills or something similar that populates the search bar with the previously input items so you can see and remove them if necessary)

**Implemented Features**

### Code Prototype

Our website is not currently hosted anywhere, so in order to preview the live site, you'll just need to have `node` installed and then run a `localhost` server on your desktop.

**Implemented Features**
The prototype is just a basic `HTML` page with a header and some buttons. Functionality-wise, we added the shareability component of the recipe-generator first. It works similarly to when2meet, if you've ever used that site, by basically adding an extension to the end of the website link (everytime a new recipe is generated, a specific end code is also generated and appended to the end of the URL so it can be easily copied and distributed via social platforms and messaging). If you generate a recipe from the home page, you'll be taken to a unique recipe page, where you can re-generate as many times as you like (but with the same URL! which maintains the shareability of each generated website for recipes).

**Features Moving Forward**
We tried using `MongoDB` for our database (you can see all the extra files in the codebase), but unfortunately, we could not figure out how to exactly implement separate databases and query through each in order to 1. verify valid ingredients (user input validation before cycling through the database) and 2. available recipes based on those input ingredients. We thought we could potentially leverage GPT-3 to verify whatever the user inputs is a valid ingredient (even if it's not in our specific database), but we did not have enough time to research access token generation or how to properly format API calls.

## Live URLs

[**Figma Prototype**](https://www.figma.com/proto/W02OnHcpkaBhhKjqNEP6Ke/Recipe-Generator?page-id=16%3A127&type=design&node-id=16-208&viewport=-1319%2C335%2C0.25&t=0OiRzfRm02ZrytYs-1&scaling=min-zoom&starting-point-node-id=16%3A128)
[**GitHub**](https://github.com/livvie-xyz/hackathon-2023)

## Presentation

[**Presentation Slides**](https://docs.google.com/presentation/d/1qGSay5gsE8GZI2_XF0gS3Wr_AU1rWUA25bJ5dEc_hKI/edit?usp=sharing)

## Next Steps

In order to turn this prototype into a working solution, we would likely need to bring on a fullstack developer to join the team and help us refine and progress the codebase. We did as best as we all could with very little coding experience, and while it was a great learning opportunity, we likely lost a lot of time to studying documentation and trying to figure out what was tehnically possible (rather than really attempt to implement anything).

We would also need to sit down and develop a launch plan or schedule moving forward so all team members and stakeholders understand the timeline for the project. We'd want to make sure we work in alignment with one another so there's no duplicate work.

## License

*This repository includes an [unlicense](http://unlicense.org/) statement though you may want [to choose a different license](https://choosealicense.com/).*