# creators-app

creators-app is a Next.js React SPA for Brave creators.  It uses tailwind and `brave-leo` for styling, storybook for component documentation, and jest for component testing.

## project structure

### components/
#### AppElements/

AppElements is a contextually specific subset of components where each subdirectory represents a page.

The important distinction between AppElements and pages (which is a next.js framework default) is that AppElements are defined irrespective of paths and the directory is aggressively flat, i.e. an AppElement should never be defined more than one subdirectory away
from AppElements

Yes:
    AppElements/
    - Page1
    - Page2

No:
    AppElements/
    -Page1/
        - Page2/

Emphatically No:
    AppElements/
    - Page1/
        -Page2/
            -Page3/

The rationale here is that we define independent stateless functional components that can be re-used in any number of contexts irrespective of paths, and we abstract state implementations to `pages/` so that each `AppElement` can be independently unit tested.

A good example of this is a `Profile` page.  It may be used in multiple contexts, such of that as an individual authenticated user who is viewing their own profile, or potentially in the context of an administrator who has permissions to view many profiles.

In this (very common) use case, the maintenance burden of keeping an Admin/User context `Profile` component is simplified because it is simply the same component being re-used in different contexts (i.e. paths).  The component may have different behaviors depending on the permissions of the user who is viewing it, and those can be manually tested independent of application state.

#### FormElements/
#### PageElements
#### BrandElements/

### pages/

Next.js pages/ represent the stateful implementation of AppElement components and can be arbitrarily nested depending on the needs of the application.

### layouts/

### models/

### context
