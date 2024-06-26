/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AppointmentsWhereInput } from "./AppointmentsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AppointmentsOrderByInput } from "./AppointmentsOrderByInput";

@ArgsType()
class AppointmentsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AppointmentsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AppointmentsWhereInput, { nullable: true })
  @Type(() => AppointmentsWhereInput)
  where?: AppointmentsWhereInput;

  @ApiProperty({
    required: false,
    type: [AppointmentsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AppointmentsOrderByInput], { nullable: true })
  @Type(() => AppointmentsOrderByInput)
  orderBy?: Array<AppointmentsOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AppointmentsFindManyArgs as AppointmentsFindManyArgs };
