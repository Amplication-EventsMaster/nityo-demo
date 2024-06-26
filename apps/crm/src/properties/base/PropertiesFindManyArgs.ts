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
import { PropertiesWhereInput } from "./PropertiesWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PropertiesOrderByInput } from "./PropertiesOrderByInput";

@ArgsType()
class PropertiesFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PropertiesWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PropertiesWhereInput, { nullable: true })
  @Type(() => PropertiesWhereInput)
  where?: PropertiesWhereInput;

  @ApiProperty({
    required: false,
    type: [PropertiesOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PropertiesOrderByInput], { nullable: true })
  @Type(() => PropertiesOrderByInput)
  orderBy?: Array<PropertiesOrderByInput>;

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

export { PropertiesFindManyArgs as PropertiesFindManyArgs };