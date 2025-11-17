import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ_AITransformation() {
  return (
    <div className="bg-[#111111]">
      <div className="py-16 max-w-[1600px] mx-auto">
        <div className="w-fit mx-auto my-10">
          <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] xl:text-[40px] text-primary-foreground font-bold font-orbitron max-w-[988px]">
            FAQ
          </h1>
          <div className="h-1 w-10 bg-white"></div>
        </div>
    <Accordion
      type="single"
      collapsible
      className="max-w-[1060px] mx-auto"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Question: How long does it take to implement AI automation?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Most deployments are completed in 4-8 weeks, depending on system complexity 
          </p> 
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Question: Can AI automation integrate with our existing ERP or CRM? </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
 
          <p>
            Yes, our automation solution are designed for seamless integration with major platforms like SAP, salesforce, and oracle.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Question: Is it scalable for multiple business units?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
       
          <p>
            Absolutely, our modular framework ensure scalability across departments and geographies.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
        </div>
      </div>
  )
}
