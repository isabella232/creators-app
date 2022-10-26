import { Card, Section, Divider } from "components/PageElements"
import { TextField, Checkbox } from "components/FormElements"

export default function Profile() {
  return (
    <Card header="Profile">
      <Section header="Basic Information">
        <div>
          <div>Avatar and cover image</div>
          <img className="rounded-16 max-h-96 w-full" src="https://imgs.search.brave.com/1EKpKtXj52ZQEgqaarntGHylSTi_Cxs-6TPxsFR8LKQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWcx/LnNvdXRoZXJubGl2/aW5nLnRpbWVpbmMu/bmV0L3NpdGVzL2Rl/ZmF1bHQvZmlsZXMv/c3R5bGVzLzRfM19o/b3Jpem9udGFsXy1f/MTIwMHg5MDAvcHVi/bGljL2ltYWdlLzIw/MTkvMDYvbWFpbi9n/ZXR0eWltYWdlcy05/MDExMzQ2MjYuanBn/P2l0b2s9OXlfNmI1/Nlk" alt="Cover" usemap="#avatar" />
          <map name="workmap">
            <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm" />
            <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm" />
            <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm" />
          </map>
          <div className="lg:flex lg:flex-row lg:justify-between lg:space-x-8 mt-8">
            <div className="flex flex-col w-full">
              <TextField id="display_name" label="Display name" />
            </div>
            <div className="flex flex-col w-full">
              <TextField id="user_name" label="Username" />
            </div>
          </div>
          <div>
            <div className="flex flex-col mt-4">
              <TextField id="bio" label="Bio" className="h-36" />
            </div>
          </div>
        </div>
      </Section>
      <Divider />
      <Section header="Social media links">
        <div className="lg:flex lg:flex-row lg:justify-between lg:space-x-8 mt-2">
          <div className="flex flex-col w-full mb-2 lg:mb-0">
            <TextField id="twitter" value="twitter.com/" className="pl-4" />
          </div>
          <div className="flex flex-col w-full">
            <TextField id="youtube" value="youtube.com/" className="pl-4" />
          </div>
        </div>
        <div className="lg:flex lg:flex-row lg:justify-between lg:space-x-8 mt-2">
          <div className="flex flex-col w-full mb-2 lg:mb-0">
            <TextField id="twitch" value="twitch.tv/" className="pl-4" />
          </div>
          <div className="flex flex-col w-full">
            <TextField id="github" value="github.com/" className="pl-4" />
          </div>
        </div>
        <div className="lg:flex lg:flex-row lg:justify-between lg:space-x-8 mt-2">
          <div className="flex flex-col w-full mb-2 lg:mb-0">
            <TextField id="instagram" value="instagram.com/" className="pl-4" />
          </div>
          <div className="flex flex-col w-full">
            <TextField id="facebook" value="facebook.com/" className="pl-4" />
          </div>
        </div>

        <div className="mt-4">Custom link</div>
        <div className="flex flex-col w-full space-y-4">
          <input id="custom_link" name="custom_link" className='bg-container-interactive-background rounded-8 h-10'></input>
          <button className="btn-secondary w-full lg:w-48">Add custom link</button>
        </div>
      </Section>
      <Section header="Tipping Settings">
        <div>Tipping amount options</div>
        <div className="flex justify-between items-center">
          <div className="flex justify-between flex-col w-[50%] mr-8">
            <select className="bg-container-interactive-background rounded-8 h-10 w-full" type="dropdown">
              <option>10</option>
              <option>10</option>
              <option>10</option>
            </select>
          </div>
          <div className="flex justify-between w-[50%]">
            <div className="">Allow custom tipping amounts</div>
            <Checkbox/>
          </div>
        </div>
      </Section>
      <Divider />
      <div className="flex space-x-8">
        <button className="btn-primary w-[50%] lg:w-48">Save changes</button>
        <button className="btn-secondary border-0 w-[50%] lg:w-48">Preview</button>
      </div>
    </Card>
  )
}

