import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

function CochlearImplants() {
  return (
    <div>
      <Card className="w-[350px]">
        <CardHeader>
          <div className="overflow-hidden rounded-lg">
            <img
              style={{ width: "100%", height: "11.5rem" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT72s29JZu1Mr_CeTP_gLDJXWoyswOyFEdNJEH65yIv9w3sh9V9vG5loNEI-JU2SaTEOc&usqp=CAU"
            />
          </div>
        </CardHeader>
        <CardContent>
          <p className="font-semibold">
            Help by donating Cochlear Implants to deaf people
          </p>
          <Progress
            style={{ height: "0.5rem", marginTop: "1rem" }}
            value={33}
          />
          <div className="flex justify-between text-xs">
            <p>
              Raised: <p>₹150000</p>
            </p>
            <p className="text-end">
              Goal: <p>₹1000000</p>
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Drawer>
            <div className="m-auto">
              <DrawerTrigger>
                <Button
                  className="px-12 bg-red-500 hover:bg-red-600 hover:text-white text-white"
                  variant="outline"
                >
                  Donate
                </Button>
              </DrawerTrigger>
            </div>
            <DrawerContent>
              <DrawerHeader>
                <div className="flex justify-between">
                  <div>
                    <Card className="w-[350px]">
                      <CardHeader>
                        <div className="overflow-hidden rounded-lg">
                          <img src="https://i1.ytimg.com/vi/xxD8ez6AzQ4/maxresdefault.jpg" />
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                  <div>
                    <div className="flex justify-around my-6">
                      <div className="grid m max-w-sm  items-center gap-1.5 w-[350px] mx-6">
                        <Label htmlFor="picture">Name</Label>
                        <Input id="picture" type="name" />
                      </div>
                      <div className="grid max-w-sm items-center gap-1.5 w-[350px]">
                        <Label htmlFor="picture">Email</Label>
                        <Input id="picture" type="email" />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="grid m max-w-sm items-center gap-1.5 w-[350px] mx-6">
                        <Label htmlFor="picture">Phone No</Label>
                        <Input id="picture" type="name" />
                      </div>
                      <div className="grid max-w-sm items-center gap-1.5 w-[350px]">
                        <Label htmlFor="picture">Address</Label>
                        <Input id="picture" type="email" />
                      </div>
                    </div>
                    <div className="mx-6 my-6">
                      <Tabs defaultValue="1" className=" w-[00px]">
                        <TabsList className="gap-x-8 gap-y-4 ">
                          <TabsTrigger value="1">₹100</TabsTrigger>
                          <TabsTrigger value="2">₹200</TabsTrigger>
                          <TabsTrigger value="3">₹300</TabsTrigger>
                          <TabsTrigger value="4">₹400</TabsTrigger>
                          <TabsTrigger value="5">₹500</TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </DrawerHeader>
              <DrawerFooter>
                <Button className="bg-red-400 hover:bg-red-500">Pay</Button>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>{" "}
        </CardFooter>
      </Card>
    </div>
  );
}

export default CochlearImplants;
